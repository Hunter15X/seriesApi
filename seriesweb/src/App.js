import React, { Component } from 'react';
import './App.css';
import BoxSeries from './components/series/BoxSeries'

class App extends Component{

  render(){
    // console.log('render()')
    return (
      <div className="App">
        Cadastro de Séries
          
          <BoxSeries />

      </div>
    );
  }
}

export default App;
