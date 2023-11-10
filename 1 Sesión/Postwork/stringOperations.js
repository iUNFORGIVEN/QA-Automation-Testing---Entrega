
const castPascalCaseToSnakeCase = (pascalCaseString) => {
    return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}

const castSnakeCaseToPascalCase = (snakeCaseString) => {
    const words = snakeCaseString.split('_');
    return words.map(word => word[0].toUpperCase() + word.substr(1)).join('');
}

const castPascalCaseToCamelCase = (pascalCaseString )=> {
    return pascalCaseString.charAt(0).toLowerCase() + pascalCaseString.slice(1);
  }

const castSnakeCaseToCamelCase = (snakeCaseString) => {
    return snakeCaseString.replace(/_([a-z])/g, function (primeraLetra, salida) {
      return salida.toUpperCase();
    });
  }


module.exports = {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase, castPascalCaseToCamelCase, castSnakeCaseToCamelCase};