var consoleInput = require('readline-sync');

initCalculator()

function initCalculator() {
    console.log("Bienvenido a tu calculadora")
    var calculatorOperation
    while (true) {

        console.log("Lista de operaciones:")
        console.log("\t1) Suma")
        console.log("\t2) Resta")
        console.log("\t3) Multiplicacion")
        console.log("\t5) Salir")
        calculatorOperation = consoleInput.question("Que opcion quieres?: ")

        switch (calculatorOperation) {
            case "1":
                sumar()
                break;
            case "2":
                restar()
                break;
            case "3":
                multiplicar()
                break;
            case "5":
                console.log("El programa va a terminar")
                break;
            default:
                console.log(`Escoge una opcion valida: ${calculatorOperation}`)
                break;
        }
        if (calculatorOperation === "5"){
            break;
        }
    }
}

function sumar() {
    var numero1 = consoleInput.question("Ingresa el primer numero: ");
    var numero2 = consoleInput.question("Ingresa el segundo numero: ");
    var suma = Number(numero1) + Number(numero2)
    console.log(`Resultado: ${suma}`)
}

function restar() {
    var numero1 = consoleInput.question("Ingresa el primer numero: ");
    var numero2 = consoleInput.question("Ingresa el segundo numero: ");
    var resta = Number(numero1) - Number(numero2)
    console.log(`Resultado: ${resta}`)
}

function multiplicar() {
    var numero1 = consoleInput.question("Ingresa el primer numero: ");
    var numero2 = consoleInput.question("Ingresa el segundo numero: ");
    var multiplicacion = Number(numero1) * Number(numero2)
    console.log(`Resultado: ${multiplicacion}`)
}

function showToUser(text) {
    console.log("Lista de operaciones:")
}
