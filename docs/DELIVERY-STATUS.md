# Entrega de componentes y seguimiento de producción

La biblioteca mantiene presentación y Storybook. La base de datos, identidad, permisos y pagos pertenecen al servidor Next.js de FE-WEB; no se agregan dependencias de Mercado Pago a los componentes.

La entrega actual agrega ocho historias de la plataforma y reutiliza los átomos Button/Input existentes. Se conserva la compatibilidad de label/actionType y se soportan props nativas, children, refs y etiquetas accesibles. Los adaptadores usan la opción unstyled para aplicar el tema sin duplicar controles.

Validaciones locales: 3 pruebas del botón, typecheck:creator, generación de CSS y build de Storybook. El catálogo heredado mantiene avisos de dependencias y un export ausente de Shelf; no se declara resuelta su modernización ni una revisión visual completa.

FE-WEB mantiene el seguimiento en [docs/ROADMAP.md](https://github.com/CarlosBricen0/FE-WEB/blob/feat/onlyhorse-platform/docs/ROADMAP.md), con evidencia de PostgreSQL y pruebas de la integración Mercado Pago/CLP. Las pruebas de proveedores reales requieren cuentas del titular.

Para CI se fijan ambos checkouts a una versión/commit compatible. La publicación en un registro y la migración coordinada de Storybook/React siguen como tareas previas a un despliegue que descargue solo FE-WEB. No se han publicado paquetes ni desplegado producción.
