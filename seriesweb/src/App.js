import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super()
    this.state = {
      lista:[]
    }
  }

  async componentDidMount(){
    const resposta = await fetch('http://localhost:3000/series');
    const series = await resposta.json()
    
    console.log(series)

    this.setState({
      lista: series
    })

  }

  render(){
    console.log('render()')
    return (
      <div className="App">
        Cadastro de Séries
          <form method="post">
            <div className="form">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" />
              <label htmlFor="nome">Ano de Lançamento</label>
              <input type="text" id="ano_lanc" name="ano_lanc" />
              <label htmlFor="nome">Temporadas</label>
              <input type="text" id="temporada" name="temporada" />
              <label htmlFor="sinopse">Sinopse</label>
              <textarea id="sinopse" name="sinopse"></textarea>

              <button type="submit">Salvar</button>
            </div>
          </form>

          <div className="list">
              <table border="1" width="800px" height="200px">
                <thead>
                    <tr>
                          <th width="200px">
                            Nome
                          </th>
                          <th width="200px">
                            Ano de Lançamento
                          </th>
                          <th width="200px">
                            Temporadas
                          </th>
                          <th width="200px">
                            Sinopse
                          </th>
                    </tr>
                 </thead> 
              </table>

              <table  width="800px" height="200px">
                  <thead>
                      {this.state.lista.map(serie => {
                        return (
                            <tr key={serie.id}>
                            <th width="200px">
                              {serie.nome}
                            </th>
                            <th width="200px">
                              {serie.ano_de_lancamento}
                            </th>
                            <th width="200px">
                            {serie.temporadas}
                            </th>
                            <th width="200px">
                            {serie.sinopse}
                            </th>
                          </tr>
                        )
                      })}
                  </thead> 
              </table>

          </div>
      </div>
    );
  }
}

export default App;
