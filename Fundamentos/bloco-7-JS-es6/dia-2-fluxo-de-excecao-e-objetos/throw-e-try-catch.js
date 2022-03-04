/* const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3')); */

// codigo que aretorna erro ao inserir string e numero ( throw")

const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));