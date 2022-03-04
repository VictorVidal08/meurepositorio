const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    // Observe também que a chave age aparece tanto em person como em info e é sobrescrita pelo valor contido em info .

    // OUTRO EXEMPLO:

    const person = {
        name: 'Roberto',
      };
      
      const lastName = {
        lastName: 'Silva',
      };
      
      const clone = Object.assign(person, lastName);
      
      console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
      console.log(person); // { name: 'Roberto', lastName: 'Silva' }

      // Como pôde ver acima, o clone é exatamente igual ao objeto person , 
      // e se você mudar qualquer propriedade nele, observará que o objeto person 
      // também será modificado. Isso ocorre devido ao fato de que o objeto 
      // retornado pelo método Object.assign é o próprio objeto destino, que foi 
      // alterado adicionando as novas propriedades.


      // OUTRO EXEMPLO:

      clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// OUTRO EX:
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;
//Neste, ao modificar o clone, o obj também é modificado;

// resolvendo este problema:podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. 
//Veja como fazer isso no exemplo abaixo.


const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);