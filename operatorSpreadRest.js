/**
 * Rest
 */
function calcularSaldo(...saldos) {
  let total = 0;
  /*
  saldos.forEach(function (saldo) {
    return (total = total + saldo);
  });
*/

  saldos.forEach((saldo) => (total += saldo));
  return total;
}
console.log(calcularSaldo(10, 20, 30, 40, 50, 60));

/**
 * Spread
 */

const saldoInicial = 1000;
const saldos = [10, 20, 30, 40, 50, 60];
const saldoTotal = [saldoInicial, ...saldos];
console.log(saldoTotal);
console.log(calcularSaldo(...saldoTotal));
