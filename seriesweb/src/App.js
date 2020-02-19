import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar'
import BoxSeries from './components/series/BoxSeries';
import HomeSeries from '../src/components/HomeSeries';
import AutoresSeries from  '../src/components/AutoresSeries';

const NotFound = () => {
  return(
    <div>
      <h1>Página não encontrada.</h1>
    </div>
  )
}

class App extends Component{

  render(){
    // console.log('render()')
    return (
      <BrowserRouter>
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/autores">
                  <AutoresSeries />
                </Route>
                <Route path="/series">
                  <BoxSeries />
                </Route>
                <Route exact path="/">
                  <HomeSeries />
                </Route>
                <Route>
                  <NotFound/>
                </Route>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
