import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App'; // importado desta forma, pois só pode haver um export default por arquivo.


describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about'); // utilizaremos o history.location.pathname para verificar se estamos na página correta 

    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    // utilizamos a função history.push() e passamos como argumento
    // algum link que não existe dentro de nossa aplicação. 
    // Depois disso, testamos se o texto que aparece no navegador,
    // ao digitar um caminho para uma página que não existe, é encontrado.
    
    const { history } = renderWithRouter(<App />);

    act( ()=> { history.push('/pagina-que-nao-existe/')})
    // utilização do act, de acordo com o @Henrique Jensen isso é devido a uma incompatibilidade de versão das bibliotecas utilizadas, vou compartilhar o código de como solucionar.

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });

  // teste de componente isolado:
  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
});