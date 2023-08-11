//Algoritmo que puede calcular la probabilidad de sucesos de la vida real
//puede usarse para medir la probabilidad de suceso de medicinas, tecnicas, etc

let usuarioItem = prompt('¿Qué objeto desea medirle la probabilidad?');
let intentosTotales = prompt('Introduzca numero de pruebas totales (o casos conocidos en los que se uso el objeto o método independientemente si se usó o no)');
let intentosExitosos = prompt('Introduzca numero de casos en el que dicho objeto funcionó');

const probabilidad = intentosExitosos/intentosTotales*100;
console.log(`La probabilidad de que ${usuarioItem} funcione es ${probabilidad}%`);