import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Verifica se somente exibe a mensagem apos email ter sido enviado', () => {
  render(<ValidEmail email="" />);
  const verify = screen.queryByTestId("id-is-email-valid");
  expect(verify).not.toBeInTheDocument();
})

test('Testando um componente, caso o email seja inválido é vermelho!', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValidColor = screen.getByTestId("id-is-email-valid");
  expect(isValidColor).toHaveAttribute('class', 'red-text');
});

test('Testando um componente, caso o email seja valido, é verde!', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValidColor = screen.getByTestId("id-is-email-valid");
  expect(isValidColor).toHaveAttribute('class', 'green-text');
});