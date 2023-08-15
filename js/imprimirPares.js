let numIngresado = prompt('Ingrese numero par');
for (let i = numIngresado; i <= 500; i += 2) {
if(numIngresado % 2 !== 0){
    console.log('Ingrese numero valido');
    break;
}
    console.log(i);
}