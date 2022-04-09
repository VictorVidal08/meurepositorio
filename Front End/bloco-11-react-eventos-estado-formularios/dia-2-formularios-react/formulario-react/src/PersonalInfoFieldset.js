import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalInfoFieldset extends Component {
    render() {
        const { emailValue, nameValue, idadeValue, handleChange } = this.props;

        return (
            <fieldset>
            <legend>Informações Pessoais</legend>

            <label htmlFor="name">
                Nome:
                <input
                id="name"
                name="name"
                type="text"
                onChange={ handleChange }
                value={ nameValue }
                />
                { !nameValue.length ? ' nome inválido ' : ' OK '}
            </label>

            <label htmlFor="email">
                Email:
                <input
                id="email"
                name="email"
                type="email"
                onChange={ handleChange }
                value={ emailValue }
                />
                
            </label>

            <label htmlFor="age">
                Idade:
                <select
                id="age"
                name="age"
                defaultValue=""
                onChange={ handleChange }
                value={ idadeValue }
                >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
                </select>
                { !idadeValue.length ? ' idade inválida' : ' OK '}
            </label>
          </fieldset>
        )
    }
}

PersonalInfoFieldset.propTypes = {
    handleChange: PropTypes.func.isRequired,
    nameValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    idadeValue: PropTypes.string.isRequired,
};

export default PersonalInfoFieldset;