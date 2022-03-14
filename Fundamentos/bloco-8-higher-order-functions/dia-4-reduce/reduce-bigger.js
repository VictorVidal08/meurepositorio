const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
// operador ternário
const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

// caso troque o segundo parametro do reduce para 100,
// o valor do maior numero do array passa a ser 100.
