import './App.css';
import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import {Container} from "@material-ui/core"

class App extends Component {
  
  render() {
  return (
    <Container component="article" maxWidth="sm">
      <h1>Formulário de Cadastro</h1>
      <FormularioCadastro />
    </Container>
  );
}
}

export default App;
