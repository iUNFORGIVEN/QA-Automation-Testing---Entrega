const {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase, castPascalCaseToCamelCase, castSnakeCaseToCamelCase} = require("./stringOperations");

const testcastPascalCaseToCamelCase = () => {
   
    executeTest('PruebaPositiva','pruebaPositiva',castPascalCaseToCamelCase);
    executeTest('PruebaNegativa','PruebaNegativa',castPascalCaseToCamelCase);
    
}

const testcastSnakeCaseToCamelCase = () => {
    console.log*("Pruebas negativas: ");
    executeTest('hasta_luego','hastaLuego',castSnakeCaseToCamelCase);
    console.log*("Pruebas negativas: ");
    executeTest('hasta_luego','hasta_luego',castSnakeCaseToCamelCase);
    
}

const testCastPascalCaseToSnakeCase = () => {
    //console.log("Pruebas de Pascal Case a Snake Case: ")

    executeTest('HolaMundo','hola_mundo',castPascalCaseToSnakeCase);
    executeTest('HolaMundo','holamundo',castPascalCaseToSnakeCase);
    
}

const testCastSnakeCaseToPascalCase = () => {
    //console.log("Pruebas de Snake Case a Pascal Snake: ")
    executeTest('heladofresa','HeladoFresa',castSnakeCaseToPascalCase)
    
}

function executeTest (input, expectedOutput, functionToExecute) {
    const actualOutput = functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}

testcastPascalCaseToCamelCase();

testcastSnakeCaseToCamelCase();

testCastPascalCaseToSnakeCase();

testCastSnakeCaseToPascalCase();

// console.log("Pruebas de Pascal Case a Snake Case: ");
// testCastPascalCaseToSnakeCase();

// console.log("Pruebas de Snake Case a Pascal Snake: ")
// testCastSnakeCaseToPascalCase();