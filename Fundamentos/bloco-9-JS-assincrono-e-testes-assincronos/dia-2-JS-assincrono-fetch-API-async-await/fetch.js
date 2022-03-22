// A função fetchJoke chama o fetch que é executado e após sua execução, 
// caso a requisição seja bem sucedida, retorna para o parâmetro da função do 
// primeiro .then() uma resposta e na sua execução iremos pegar a versão JSON 
// dessa resposta por meio da função .json() . Note que a função .json() também 
// é assíncrona, por isso temos o segundo .then() que, por sua vez, vai pegar o 
// JSON vindo do primeiro .then() e dentro dele acessar o elogio que esta 
// armazenado no campo value para mostrar no console.
// Ok, mas e ser der erro em alguma requisição?
// O que você pode fazer em relação a isso? Agora entra o .catch() !


const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();

// com o catch
/* const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke(); */

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported
// Note que para forçar o erro retiramos o https:// do início da url .