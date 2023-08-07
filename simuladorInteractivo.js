const precioDelProducto = parseFloat(prompt('Ingrese precio del producto'));
const nombreDelProducto = prompt('Ingrese nombre del producto (ej. Zapatillas, jeans, etc).');

let sumIva = precioDelProducto * 1.21;

const usuarioRespuesta = prompt('Un descuento salvaje ha aparecido! ¿Desea aplicarlo a su compra? (s/n)').toLowerCase();

function descuentoRandom(precioDelProducto) {
  let discount = Math.random() * 10; // Número aleatorio entre 0 y 10
  let precioConDescuento = precioDelProducto - (discount / 100) * precioDelProducto;

  return precioConDescuento;
}

if (usuarioRespuesta === 's') {
  sumIvaDescuento = parseInt(descuentoRandom(precioDelProducto));
  console.log(`El precio de sus ${nombreDelProducto} es ${sumIvaDescuento}`);
}
else if(usuarioRespuesta === 'n'){
    console.log(`El precio de sus ${nombreDelProducto} es ${sumIva}`);
}


