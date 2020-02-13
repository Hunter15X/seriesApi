import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BoxSeries from './components/series/BoxSeries';

class App extends Component{

  render(){
    // console.log('render()')
    return (
      <div className="App">
        <h1 className="text-center mt-3 mb-4">
        Cadastro de Séries
        </h1>  
          <BoxSeries />

      </div>
    );
  }
}

export default App;
