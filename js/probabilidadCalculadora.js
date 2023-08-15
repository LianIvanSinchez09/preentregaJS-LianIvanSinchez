//algoritmo que puede calcular la probabilidad de sucesos de la vida real
//puede usarse para medir la probabilidad de suceso de medicinas, tecnicas, etc

// declaración de variables
let usuarioItem, intentosTotales, intentosExitosos;

// función para obtener datos del usuario
function obtenerDatosUsuario() {
    usuarioItem = prompt('¿Qué objeto desea medirle la probabilidad?');
    intentosTotales = parseInt(prompt('Introduzca número de pruebas totales'));
    intentosExitosos = parseInt(prompt('Introduzca número de casos en los que el objeto funcionó'));
}

// función para calcular la probabilidad
function calcularProbabilidad(exitosos, totales) {
    return (exitosos / totales) * 100;
}

// función para mostrar el resultado
function mostrarResultado(probabilidad) {
    console.log(`La probabilidad de que ${usuarioItem} funcione es ${probabilidad.toFixed(2)}%`);
}

// obtener datos del usuario
obtenerDatosUsuario();

// calcular probabilidad
let probabilidad = calcularProbabilidad(intentosExitosos, intentosTotales);

// mostrar resultado
mostrarResultado(probabilidad);