import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      idade: 0,
      anecdote: '',
      checkbox: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, name, idade, anecdote, checkbox } = this.state;

    return (
      <div>
        <h1>Estados e React </h1>
        <form className="form">

        <fieldset>
            <legend>Informações Pessoais</legend>

            <label htmlFor="name">
                Nome:
                <input
                id="name"
                name="name"
                type="text"
                onChange={ this.handleChange }
                value={ name }
                />
            </label>

            <label htmlFor="email">
                Email:
                <input
                id="email"
                name="email"
                type="email"
                onChange={ this.handleChange }
                value={ email }
                />
            </label>

            <label htmlFor="age">
                Idade:
                <select
                id="age"
                name="age"
                defaultValue=""
                onChange={ this.handleChange }
                value={ idade }
                >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
                </select>
            </label>
          </fieldset>
          <fieldset>
              <legend>Escreva o que quiser</legend>

            <label htmlFor="anecdote">
                TextArea:
                <textarea 
                id="anecdote" 
                name="anecdote" 
                onChange={ this.handleChange }
                value={ anecdote }
                />
                
            </label>
          </fieldset>

          <fieldset>
              <legend>Marque aqui se quiser!</legend>
            <label htmlFor="checkbox">
                Checkbox:
                <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                onChange={ this.handleChange }
                value={ checkbox }
                />
            </label>
          </fieldset>

        </form>
      </div>
    );
  }
}

export default Form;