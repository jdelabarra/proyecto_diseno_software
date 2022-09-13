# RedCursos

Complemento basado en chrome para optimizar el uso diario de las aplicaciones web de la UAIn´t.

## Características Principales:

> * Inicio de sesion automatico.
> * Acceso acelerado a la infromacion.
> * Presentacion de una interfaz simple.
> * Recopila datos de intranet y webcursos.

# Instrucciones de uso:

1. Ingresar datos de ingreso en la seccion de opciones del complemento.

2. Esperar a que sincronice los datos.

3. Seleccionar los ramos importantes.

4. Usar a travez de [WebCursos](https://webc.uai.cl) con normalidad.

> **WARNING**: para funciones excepcionales de Webcursos desactivar la extension

## Tecnologías Utilizadas:

- [React.js](https://facebook.github.io/react/)
  * Gestion de contenido por partes.
- [webpack.js](https://webpack.js.org)
  * Permite hacer que el motor de chrome entienda aplicaciones basadas en react.
- [material.io](https://material.io/design)
  * Diseño vanguardista, limpio y moderno.
- [bootstrap](https://getbootstrap.com/docs)
  * Forma facil de añadir elementos web.


## Historial de informacion:

- [tutorial chrome extension](https://www.youtube.com/watch?v=-dhMbVEreII&t=878s)
- [tutorial webpack](https://www.youtube.com/watch?v=8OCEfOKzpAw)
- [bootstrap x webpack](https://getbootstrap.com/docs/5.2/getting-started/webpack/)


## Estructura del proyecto:

```
my-project/
├── dist/
│   └── index.html
├── node_modules/
│   └── @modules
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│       └── styles.scss
├── public/
│   ├── js/
│   │   └── main.js
│   └── scss/
│       └── styles.scss
├── jsconfig.json
├── package-lock.json
├── package.json
└── webpack.config.js
├── README.md
```

@nanodelabarra
