// Faça uma lista com as suas frutas favoritas
const specialFruit = ['goiaba', 'jaboticaba', 'ameixa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['nutella', 'leite copndensado', 'suco'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return ['Lista de frutas:',...fruit,'Lista de complementos:' ,...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));