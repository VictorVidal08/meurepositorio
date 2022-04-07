import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick =() => {
    this.setState((estadoAnterior, _props) => ({
    numeroDeCliques: estadoAnterior.numeroDeCliques + 1
  }))}
  handleClick1 =() => {
    this.setState((estadoAnterior1, _props) => ({
    numeroDeCliques1: estadoAnterior1.numeroDeCliques1 + 1
  }))}
  handleClick2 =() => {
    this.setState((estadoAnterior2, _props) => ({
    numeroDeCliques2: estadoAnterior2.numeroDeCliques2 + 1
  }))}

  // apoio do gabarito
  getButtonColor(num) {
      // Essa função contém um ternário que realiza a lógica para mudarmos
      // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }
  
  render() {
    const { numeroDeCliques, numeroDeCliques1, numeroDeCliques2 } = this.state;
    return <div>
        <h1>Os botões mudam de cor de acordo com a quantidade de clicks</h1>
        <button 
        onClick={this.handleClick}
        style={{backgroundColor: this.getButtonColor(numeroDeCliques)}}
        >Botão conta click {this.state.numeroDeCliques}</button>
        <button 
        onClick={this.handleClick1}
        style={{backgroundColor:this.getButtonColor(numeroDeCliques1)}}
        >{this.state.numeroDeCliques1}</button>
        <button 
        onClick={this.handleClick2}
        style={{backgroundColor: this.getButtonColor(numeroDeCliques2)}}
        >{this.state.numeroDeCliques2}</button>
    </div>
  }
}

export default App;