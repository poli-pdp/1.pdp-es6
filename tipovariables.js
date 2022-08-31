/**
 * VAR
 */
function explicarVar() {
  var dato = 10;
  dato = 20;
  if (true) {
    var dato = 30;
    console.log(dato);
  }
  console.log(dato);
}
explicarVar();

/**
 * LET
 */
function explicarLet() {
  let valor = 10;
  valor = 20;
  if (true) {
    let valor = 30;
    console.log(valor);
  }
  console.log(valor);
}
explicarLet();

/**
 * CONST
 */
function explicarConst() {
  const valor = 10;
  const datos = [1,2,3,4];
  //valor = 20;
  if (true) {
    const valor = 30;
    console.log(valor);
  }
  console.log(datos);
  console.log(valor);
  datos.push(5);
  console.log(datos);
}
explicarConst();
