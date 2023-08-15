// función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// función para restar dos números
function restar(a, b) {
    return a - b;
}

// función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// función para dividir dos números
function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por cero.";
    }
}

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
            return;
    }

    alert(`Resultado: ${result}`);
}

// función para imprimir números del 0 al 5
function imprimirNumeros() {
    for (let i = 1; i <= 5; i++) {
        alert(i);
    }

    // Frase motivadora que se imprime después del bucle
    alert("¡Persistencia y esfuerzo son la clave del éxito! ¡Sigue adelante!");
}

const userChoice = prompt('¿Desea usar la "Calculadora" o la "Impresora Motivadora" para imprimir numeros del 0 al 5 y recibir una frase motivadora? (Escribir "calculadora" o "impresora")')

if(userChoice === 'calculadora'){
    calculator();
}
else if(userChoice === 'impresora'){
    imprimirNumeros();
}