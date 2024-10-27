import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js', // Punto de entrada
  output: {
    file: 'dist/bundle.js', // Archivo de salida
    format: 'esm' // Formato de módulo ES
  },
  plugins: [
    resolve(), // Permite importar módulos de node_modules
    commonjs(), // Convierte módulos CommonJS a ES6
    babel({
      exclude: 'node_modules/**', // Excluye node_modules
      babelHelpers: 'bundled', // Utiliza helpers "bundled" para Babel
      presets: ['@babel/preset-env'] // Transpila ES6+ a ES5
    }),
    terser(), // Minifica el código final
    json(), // Permite la importación de archivos JSON
    postcss({
        extract: true, // Extrae CSS a un archivo separado
    })
  ]
};
