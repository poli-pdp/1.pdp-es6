/**
 * Object propiedades
 */

const jugador = {
  nombre: "Luis",
  equipo: "Liverpool",
  edad: 24,
};

//ES5
//const nombre = jugador.nombre;
//const edad = jugador.edad;
//console.log(nombre);
//ES6
const { equipo, edad } = jugador;
console.log(edad);

//Array elementos posicion
const jugadores = ["Luis", "James", "falcao"];
//const luis = jugadores[0];
const [, px, py] = jugadores;
console.log(px);
console.log(py);

let a = 10;
let b = 20;
[b, a] = [a, b];

console.log(a);
console.log(b);
