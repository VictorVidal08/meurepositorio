const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.group);
  
  // Construímos essa função para implementar um laço de repetição entre 0 e um número especificado 
  // via parâmetro ( number ) e para mostrar no console o valor da variável count de 0 a N ( number ). 
  // O console.log é uma função própria do JavaScript , mas veja que fica mais simples caso você 
  // precise substituir esta ação para console.table ou console.group .