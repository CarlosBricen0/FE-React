# FE-React · componentes compartidos

Biblioteca de componentes existente y kit de OnlyHorse, documentados en Storybook. FE-WEB es el repositorio consumidor independiente.

```sh
npm install
npm run build:creator-css
npm run sb
```

Storybook: http://localhost:6007. Las historias nuevas están en `Creator platform/Shared components`.

```sh
npm test
npm run build-storybook
```

`creator/ui` contiene los componentes reutilizables del proyecto del video; Button e Input reutilizan los átomos existentes. `creator/styles.css` se genera con Tailwind y se importa en Storybook. FE-WEB escanea las clases de este kit y las compila con su propio tema.

FE-WEB consume este repositorio como `components-front-end` con `file:../FE-React`. Después de modificar componentes, ejecutar `npm run sync:components` desde FE-WEB y reiniciar Next si cambió el paquete. Para CI, colocar ambos checkouts como carpetas hermanas antes de instalar. React es peer dependency; Next fija su resolución al React del consumidor.

[Análisis y requerimiento completo](docs/ONLYHORSE-ANALYSIS.md). Código de UI adaptado de la referencia MIT, con licencia en `creator/LICENSE`.
