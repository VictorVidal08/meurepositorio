import React, { Component } from 'react';
import DataFieldset from './DataFieldset';
import PersonalInfoFieldset from './PersonalInfoFieldset';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      idade: 0,
      anecdote: '',
      checkbox: false,
      formularioComErros: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { name, idade, anecdote, checkbox } = this.state;

    const errorCases = [
      !name.length,
      !idade.length,
      !anecdote.length,
      !checkbox,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  render() {
    const { email, name, idade, anecdote, checkbox } = this.state;

    return (
      <div>
        <h1>Estados e React </h1>
        <form className="form">
          <PersonalInfoFieldset 
          nameValue={ name }
          emailValue={ email }
          idadeValue={ idade }
          handleChange={ this.handleChange}
          />

          <DataFieldset 
          anecdoteValue={ anecdote }
          checkboxValue={ checkbox }
          handleChange={this.handleChange}
          />

        </form>
        { formularioComErros 
        ? <span style={ {color: 'red'} }>Preencha todos os campos</span>
        : <span style={ {color: 'green'} }>O formulario foi preenchido corretamente</span>}

      </div>
    );
  }
}

export default Form;