import React, { Component } from 'react'
// import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  render() {
      const { estadoFavorito } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea 
                name="estadoFavorito" 
                value={this.state.estadoFavorito} 
                onChange={this.handleChange} 
              />
          </label>
          <label>
          Idade:
            <select 
                type="number"
                name="idade"
                defaultValue= ""
            >
            <option>Selecione</option>
            <option>Maior que 18</option>
            <option>Menor de 18</option>
            </select>
        </label>
          
         <label>
             Selecione para confirmar sua presença.
          <input
            type="checkbox"
            name="vaiComparecer"
          />
             </label> 
          
        </form>
        {console.log(this.state)}
      </div>
    );
  }
}

export default Form;