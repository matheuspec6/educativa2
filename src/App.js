import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/store/';

 //Páginas
import entrar from './view/login';
import usuarioNovo from './view/NovoUsuario/index';
import senha from './view/recuperarSenha/index';
import cadastrarAluno from './view/cadastrarAluno';

function App(){
  return(
    <Provider store={store}>
      <Router>
        <Route exact path='/login' component={entrar} />
        <Route exact path='/novo-usuario' component={usuarioNovo} />
        <Route exact path='/recuperar-senha' component={senha} />
        <Route exact path='/cadastrarAluno' component={cadastrarAluno} />
      </Router>
    </Provider>
  )
}

export default App;
