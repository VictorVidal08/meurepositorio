import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataFieldset extends Component {
    render() {
        const { anecdoteValue, checkboxValue, handleChange } = this.props;

        return (
            <fieldset>
              <legend>Escreva o que quiser</legend>

            <label htmlFor="anecdote">
                TextArea:
                <textarea 
                id="anecdote" 
                name="anecdote" 
                onChange={ handleChange }
                value={ anecdoteValue }
                />
                { !anecdoteValue.length ? ' erro, campo vazio' : ' OK '}
            </label>

              <legend>Marque aqui se quiser!</legend>
            <label htmlFor="checkbox">
                Checkbox:
                <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                onChange={ handleChange }
                value={ checkboxValue }
                />
            </label>
          </fieldset>
        )
    }
}

DataFieldset.propTypes = {
    handleChange: PropTypes.func.isRequired,
    anecdoteValue: PropTypes.string.isRequired,
};

export default DataFieldset;