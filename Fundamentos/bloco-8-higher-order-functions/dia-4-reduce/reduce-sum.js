// faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumNumbers = (sum, number) => ((number % 2 === 0) ? sum += number : sum);
const result = numbers.reduce(sumNumbers)
console.log(result);