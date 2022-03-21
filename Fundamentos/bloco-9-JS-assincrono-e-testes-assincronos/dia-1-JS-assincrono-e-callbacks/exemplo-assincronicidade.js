// Note que console.log('Comprar parafusos') e console.log('Adicionar ao estoque')
//  foram declarados antes das etapas 1 , 2 e 3 , mesmo assim o retorno das 
// chamadas só ocorre ao final. Isto acontece pois utilizamos a função setTimeout . 

setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
  }, 2000);
  
  console.log('1 - Receber roda'); // 1 - Receber roda
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
  console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro