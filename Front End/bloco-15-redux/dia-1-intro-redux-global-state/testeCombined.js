import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './indexCombined';

const store = createStore(reducerCombinado);

console.log(store.getState())

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}
...