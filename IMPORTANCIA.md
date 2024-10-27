## IMPORTANCIA: Agregar soporte para distintos archivos, trabajar con módulos externos, transformaciones de código y compatibilidad.

## Plugins: Node resolve, commonJS, Babel, Terser, PostCSS, JSON
1. Node resolve: Permite trabajar con moduloS Node.js, facilita la importación de paquetes npm.  
2. CommonJs: Convierte módulos CommonJS en módulos ES6.  
3. Babel: Compatibilidad con navegadores antiguos.
4. Terser: Minifica el código JavaScript, reduciendo su tamaño y mejorando los tiempos de carga. Elimina espacios en blanco, comentarios y otros elementos innecesarios.
5. PostCSS:  Permite aplicar diferentes transformaciones a los estilos CSS.
6. JSON: Permite importar archivos JSON como módulos dentro del código JavaScript.
Facilita la inclusión de datos en formato JSON sin necesidad de convertirlos manualmente.

## Node resolve y CommonJS

npm install @rollup/plugin-node-resolve @rollup/plugin-commonjs --save-dev


## Babel

npm install @rollup/plugin-babel @babel/core @babel/preset-env --save-dev


## Terser: minimiza el código resultante

npm install @rollup/plugin-terser --save-dev

## PostCSS

npm install rollup-plugin-postcss --save-dev


## JSON

npm install @rollup/plugin-json --save-dev