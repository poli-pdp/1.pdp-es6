let teams = ["Nacional", "Medellin"];
for (let i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}
teams.forEach((x) => {
  console.log(x);
});

/**push-pop-shift son mutables */
teams.push("Envigado");
console.log(teams);
let primerItem = teams.shift();
console.log(primerItem);
console.log(teams);
let ultimoItem = teams.pop();
console.log(ultimoItem);
console.log(teams);

/**Inmutables  */

/**MAP >> recorrer, iterar, extraer informacion*/
let estudiantes = ["Ana", "Pedro", "Juan"];
let nombres = estudiantes.map((estudiante) => `${estudiante} -`);
console.log(nombres);
console.log(estudiantes);

let productos = [
  { nombre: "Libro", costo: 20 },
  { nombre: "Revista", costo: 10 },
  { nombre: "Audio", costo: 30 },
];

let nombresProductos = productos.map((producto) => producto.nombre);
console.log(nombresProductos);
console.log(productos);

let ivaProductos = productos.map((producto) => {
  return { ...producto, iva: producto.costo * 0.19 };
});
console.log(ivaProductos);
console.log(productos);

const ligaBetPlay = [
  { nombre: "Nacional", ciudad: "Medellin", titulos: 17, libertadores: 2 },
  { nombre: "Medellin", ciudad: "Medellin", titulos: 7, libertadores: 0 },
  { nombre: "Millonarios", ciudad: "Bogota", titulos: 16, libertadores: 0 },
  { nombre: "Santafe", ciudad: "Bogota", titulos: 10, libertadores: 0 },
  { nombre: "America", ciudad: "Cali", titulos: 15, libertadores: 0 },
  { nombre: "Cali", ciudad: "Cali", titulos: 8, libertadores: 0 },
  { nombre: "OncaCaldas", ciudad: "Manizales", titulos: 8, libertadores: 1 },
];

/**ES6 */

//Map
const nombresEquipos = ligaBetPlay.map((equipo) => equipo.nombre);
console.log(nombresEquipos);
//console.log(ligaBetPlay);

//Every
const todosTienenLibertadores = ligaBetPlay.every(
  (equipo) => equipo.libertadores > 0
);
console.log(todosTienenLibertadores);
//console.log(ligaBetPlay);

//Some
const algunoTienenLibertadores = ligaBetPlay.some(
  (equipo) => equipo.libertadores > 0
);
console.log(algunoTienenLibertadores);
//console.log(ligaBetPlay);

//Find buscar (solo devuelve la primera coincidencia)
const equiposCiudadBogota = ligaBetPlay.find(
  (equipo) => equipo.ciudad === "Bogota"
);
console.log(equiposCiudadBogota);

//Filter (filtar)
const nombreEquiposCiudadCali = ligaBetPlay
  .filter((equipo) => equipo.ciudad === "Cali")
  .map((equipo) => equipo.nombre);
console.log(nombreEquiposCiudadCali);
//console.log(ligaBetPlay);

//Reduce (acumulador, contador)
const totalLibertadores = ligaBetPlay.reduce(
  (contador, equipo) => (contador += equipo.libertadores),
  0
);
console.log(totalLibertadores);
//console.log(ligaBetPlay);

const totalTitulosCiudadMedellin = ligaBetPlay
  .filter((equipo) => equipo.ciudad === "Medellin")
  .reduce((prev, act) => (prev += act.titulos), 0);
console.log(totalTitulosCiudadMedellin);

const equipoMasTitulos = ligaBetPlay.reduce((prev, act) => {
  return prev.titulos > act.titulos ? prev : act;
});
console.log(equipoMasTitulos.nombre);

const palabras = ["Este", "7 de", "septiembre,", "el bitcoin", "cumple un año"];
const frase = palabras.reduce(
  (fraseCompleta, palabra) => `${(fraseCompleta += palabra)} `,
  ""
);
console.log(frase);

const totales = ligaBetPlay.reduce(
  (prev, act) => ({
    titulos: prev.titulos + act.titulos,
    libertadores: prev.libertadores + act.libertadores,
  }),
  { titulos: 0, libertadores: 0 }
);
console.log(totales);
