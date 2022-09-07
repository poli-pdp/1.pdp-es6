/**
 * Function Declarative
 */

function calculo(valor = 1) {
  //console.log(arguments[1]);
  //console.log(arguments[2]);
  return valor * 100;
}
const resp = calculo(100, 19, 20);
console.log(resp);

/**
 * Function Expression
 */

const calcular = function (valor = 1) {
  return valor * 100;
};
const resp2 = calcular(500);
console.log(resp2);

//Paso por valor
let x = 10;
function cambioPorValor(a) {
  a = 20;
}
cambioPorValor(x);
console.log(x);

//Paso por referencia
const persona = {
  nombre: "Ana",
};

function cambioPorReferencia(obj) {
  (obj.nombre = "Maria"), (obj.edad = 20);
}
cambioPorReferencia(persona);
console.log(persona);
