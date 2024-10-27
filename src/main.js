import data from './data.json';
import './styles.css';
import { greet } from './utils';

console.log(data); // Muestra los datos del archivo JSON en la consola
document.body.innerHTML = greet(data.name); // Muestra un saludo en la página
