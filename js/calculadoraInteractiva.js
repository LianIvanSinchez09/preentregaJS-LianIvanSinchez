// sumar
function sumar(a, b) {
    return a + b;
}

// restar
function restar(a, b) {
    return a - b;
}

// multiplicar
function multiplicar(a, b) {
    return a * b;
}

// dividir
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
            result = sumar(num1, num2);
            break;
        case "-":
            result = restar(num1, num2);
            break;
        case "*":
            result = multiplicar(num1, num2);
            break;
        case "/":
            result = dividir(num1, num2);
            break;
        default:
            alert('Operación inválida');
            return;
    }

    alert(`Resultado: ${result}`);
}

// imprimir números del 0 al 5 + frase motivadora
function imprimirNumeros() {
    for (let i = 1; i <= 5; i++) {
        alert(i);
    }
    alert("¡Persistencia y esfuerzo son la clave del éxito! ¡Sigue adelante!");
}

const userChoice = prompt('¿Desea usar la "Calculadora" o la "Impresora Motivadora" para imprimir numeros del 0 al 5 y recibir una frase motivadora? (Escribir "calculadora" o "impresora")')

if(userChoice.toLowerCase() === 'calculadora'){
    calculator();
}
else if(userChoice.toLowerCase() === 'impresora'){
    imprimirNumeros();
}