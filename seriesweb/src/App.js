import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar'
import BoxSeries from './components/series/BoxSeries';

class App extends Component{

  render(){
    // console.log('render()')
    return (
      <div className="App">
          <NavBar /> 
          <BoxSeries />
      </div>
    );
  }
}

export default App;
