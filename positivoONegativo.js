let numIngresado = prompt('Ingrese numero');

numIngresado = parseFloat(numIngresado);

if (isNaN(numIngresado)) {
  alert('Ingreso no valido, por favor ingrese un numero valido.');
} else if (numIngresado < 0) {
  alert('Numero ingresado es negativo');
} else if (numIngresado > 0) {
  alert('Numero ingresado es positivo');
} else {
  alert('Numero ingresado es 0');
}
