# Adaptación del tutorial a FE-React y FE-WEB

## Fuente y alcance

Referencia: https://www.youtube.com/watch?v=mduqkHlJujA
Título: Build an OnlyFans with Next.js, Stripe and React | Complete Guide 2024.
Autor: Codesistency. Duración publicada: 41.566 segundos.
Código enlazado por el autor: https://github.com/burakorkmez/onlyfans
Commit analizado: 4f5aea9c75014c821e4aa52fc1face38265654e5, licencia MIT conservada.

El análisis se basó en metadatos, descripción, capítulos, imagen de demostración y código completo enlazado por el video. No se afirma haber reproducido las 11,5 horas de video. Se conserva OnlyHorse, temática ecuestre, nombres de rutas y flujos de la referencia; no se agregan mensajería privada, múltiples creadores ni otros requisitos ajenos al tutorial.

## Situación inicial

FE-React tenía una biblioteca TypeScript de átomos, moléculas, organismos y layouts, con CSS Modules y Storybook. Se llamaba `fe-components`. FE-WEB importaba un paquete de registro distinto, `components-front-end`, por lo que trabajar sobre FE-React no actualizaba necesariamente la web. Storybook mezclaba versiones 6 y 7; FE-WEB usaba Next 12 y React 17. No había archivos de bloqueo para instalaciones reproducibles.

La página inicial de FE-WEB listaba usuarios y sus contraseñas. Se preserva el starter en `legacy/pages`, fuera del enrutador activo, y no se expone ese listado. Los componentes y helpers anteriores permanecen disponibles. Next se actualiza para soportar App Router y Server Actions usados por el tutorial; no se crea un tercer repositorio ni se fusionan historias Git.

## División de responsabilidades

| Repositorio | Responsabilidad |
|---|---|
| FE-React | Componentes base existentes; adaptadores Button/Input; kit de componentes de la plataforma (Radix); tema; variantes y estados en Storybook; pruebas de compatibilidad del botón existente. |
| FE-WEB | Next.js, composición de pantallas, autenticación, permisos, persistencia Prisma/PostgreSQL, cargas Cloudinary, Stripe, correo, administración y despliegue. |

FE-WEB declara `components-front-end: file:../FE-React`. Se instala con `--no-install-links` como enlace local y Next transpila la biblioteca. Sus alias resuelven React desde FE-WEB para evitar duplicados. Tras cambiar FE-React, ejecutar `npm run sync:components` en FE-WEB. Cada repositorio tiene su propia rama `feat/onlyhorse-platform`; nombres iguales no conectan las ramas entre sí.

El kit `creator/ui` deriva de los componentes MIT de la referencia. Sus adaptadores Button/Input reutilizan los átomos existentes con una opción `unstyled`, conservando la API previa. Los imports de UI en la web apuntan al paquete compartido, no a copias locales. La lógica de negocio no se mueve a Storybook.

## Requerimiento funcional y aceptación

| Capítulo | Requerimiento | Criterio de aceptación |
|---|---|---|
| 00:17:20 | Landing | Hero, galería, destacados, beneficios, testimonios, membresía y equipo; adaptación móvil y tema claro/oscuro. |
| 02:00:25 | Layout autenticado | Navegación, perfil, productos sugeridos, salida y acceso a facturación. |
| 02:34:00 / 07:32:40 | Feed | Orden reciente, texto, imágenes y video; estados de carga, vacío y error. |
| 03:44:00 / 06:36:00 | Tienda | Catálogo, detalle, tallas, sugerencias y exclusión de productos archivados. |
| 04:13:00 / 05:53:40 | Administración | Solo ADMIN_EMAIL crea/elimina posts y crea/archiva productos; controles tanto en página como en acciones. |
| 05:08:30 | Base de datos | Migración versionada; usuarios, posts, comentarios, likes, productos, pedidos, dirección, suscripción, pagos y eventos. |
| 05:33:30 | Kinde | Registro/inicio/salida; callback crea perfil real; no se almacenan contraseñas de usuarios en la aplicación. |
| 06:47:00 | Perfil | Cambiar nombre y foto propia; email no editable por formulario; validación en servidor. |
| 07:17:44 / 10:44:40 | Estadísticas | Ventas pagadas, suscripciones vigentes e ingresos registrados por Stripe; pedidos sin pagar no cuentan. |
| 07:52:10 | Borrado | Solo administrador; comentarios/likes se eliminan por cascada. |
| 07:59:00 | Comunidad | Solo miembros vigentes o administrador interactúan; un like por usuario/post, actualización transaccional. |
| 08:30:30 | Suscripciones | Mensual/anual; Checkout asociado a identidad real; webhook verifica firma y sincroniza estado/fechas. |
| 09:32:10 / 10:31:00 | Correo | Bienvenida/recibo desde webhook; cola durable y reintento protegido. |
| 09:47:30 | Compra | Precio tomado de la base, talla validada, pedido ligado al comprador, confirmación solo después del webhook. |
| 10:58:30 | Portal Stripe | Sesión de portal creada por servidor para customerId del usuario autenticado. |
| 11:07:00 | Despliegue | Build, migraciones, variables privadas, webhook HTTPS, dominio de email y checklist de pruebas externas. |

## Reglas de datos y permisos

- Visitante: landing, precios; rutas de aplicación requieren autenticación.
- Usuario registrado sin membresía: catálogo y perfil; posts privados se redactan en servidor (texto, media y comentarios).
- Suscriptor: contenido premium e interacción mientras el estado y la fecha sean vigentes.
- Administrador: acciones de contenido/productos y analítica. Ocultar un enlace no es una autorización.
- El comprador solo puede consultar su propio pedido. El retorno desde Stripe no marca pagos como exitosos.
- Dinero en centavos enteros; planes USD 59/mes y USD 499/año como la referencia. Los Price IDs de Stripe deben coincidir con esos valores.
- WebhookEvent tiene clave única; las mutaciones y la recepción del evento ocurren en una transacción. Los errores devuelven 500 para permitir reintento.
- Payment registra cobros de facturas y compras confirmadas; la analítica no suma el valor nominal de un plan como si fuese todo el historial de ingresos.
- El estado más reciente de Stripe se consulta para tolerar eventos de suscripción fuera de orden.
- Se preservan pedidos impagos para auditoría. La UI espera confirmación real antes de mostrar una compra exitosa.

## Configuración y límites de verificación

Los servicios externos requieren cuentas y secretos reales, configurados en FE-WEB/.env.local. No se incluyen secretos, usuarios administrativos falsos ni pagos simulados. La landing y Storybook pueden funcionar sin esas cuentas. La ruta `/setup` explica configuración cuando Kinde no está disponible. Docker local debe estar ejecutándose para iniciar PostgreSQL.

El contenido multimedia usa URLs Cloudinary como el tutorial. La redacción evita entregar URLs premium a quien no tiene acceso; no equivale a DRM ni impide que un miembro comparta una URL. Para distribución de contenido con protección frente a enlaces compartidos se necesita almacenamiento privado y URLs firmadas de corta duración, fuera de lo demostrado por el tutorial.

## Validación prevista

1. FE-React: pruebas de compatibilidad y build completo de Storybook.
2. FE-WEB: Prisma validate/generate, TypeScript, pruebas de reglas de acceso/precios/redacción y build de producción.
3. HTTP local: landing, precios, configuración y rutas sin autenticación.
4. Con cuentas externas: dos identidades (admin/miembro), compra de prueba, renovación/cancelación, duplicados de webhook, fallos de pago, permisos y envío de correos.

El resultado de cada comprobación se registra en FE-WEB/docs/VALIDATION.md. Una compilación correcta no acredita una transacción real de Stripe ni una sesión real de Kinde.
