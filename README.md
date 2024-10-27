# Rollup Plugins

## INSTALAR ROLLUP
npm install rollup --save-dev
## INSTALAR PLUGINS
npm install @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-babel @babel/core @babel/preset-env @rollup/plugin-terser rollup-plugin-postcss @rollup/plugin-json --save-dev

## Añadir 
"name": "your-project",
  "version": "1.0.0",
  "type": "module", 
  "scripts": {
    "build": "rollup -c"
  },

## Crear paquete
npx rollup -c

## Crear index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Proyecto Rollup</title>
  <link rel="stylesheet" href="bundle.css"> <!-- Ruta al archivo CSS generado -->
</head>
<body>
  <h1>Bienvenido a mi proyecto Rollup</h1>
  <div id="app"></div>
  <script src="bundle.js" type="module"></script> <!-- Ruta al archivo JS generado -->
</body>
</html>
