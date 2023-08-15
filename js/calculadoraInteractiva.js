// Función para sumar
function sumNum(a, b) {
    return a + b;
}

// Función para restar
function restarNum(a, b) {
    return a - b;
}

// Función para dividir
function divNum(a, b) {
    return a / b;
}

// Función para multiplicar
function multiNum(a, b) {
    return a * b;
}

// Función principal de la calculadora
function calculator() {
    const operation = prompt("Seleccione una operación: +, -, *, / (o 'salir' para salir)");

    if (operation.toLowerCase() === "salir") {
        console.log("Calculadora cerrada.");
        return;
    }

    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let result;

    switch (operation) {
        case "+":
            result = sumNum(num1, num2);
            break;
        case "-":
            result = restarNum(num1, num2);
            break;
        case "*":
            result = multiNum(num1, num2);
            break;
        case "/":
            result = divNum(num1, num2);
            break;
        default:
            console.log('Operación inválida');
            return; // Sale de la función si la operación es inválida
    }

    alert(`Resultado: ${result}`);
}

// Iniciar la calculadora
calculator();