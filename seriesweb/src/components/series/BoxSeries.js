import React, { Component } from 'react';

import FormularioSeries from './FormularioSeries';
import TabelaSeries from './TabelaSeries';

class BoxSeries extends Component {
    
    constructor() {
        super()

        this.state = {
          lista: []
        }
    }
    
      // Chamado quando o App ja está pronto
      // fetch -> buscar
    async componentDidMount() {
        const resposta = await fetch('http://localhost:3000/series');
        const series = await resposta.json()
    
        this.setState({
          lista: series
        })
    }

    enviaDados = async (serie) => {
      
      serie.ano_de_lancamento = serie.lancamento
      delete serie.lancamento

      const params = {
        method: 'POST',
        headers: {  
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serie)
      }

      try{
        const res = await fetch('http://localhost:3000/series', params)

        if(res.status === 201){
          console.log('Enviado com sucesso')
          serie = await res.json()
          this.setState({
            lista: [...this.state.lista, serie]
          })

          console.log(serie)
        }
      }
      catch(erro){
        console.log(erro)
      }

    }

    delete = async (id) => {

      // console.log(e)

      const params = {
          method: "DELETE",
      }

      const retorno = await fetch("http://localhost:3000/series/" + id, params)
      
      if(retorno.status === 204)
          this.setState({
            lista: this.state.lista.filter(serie => serie.id !== id)
      })
  }

    render() {
        return(
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                <FormularioSeries enviaDados={this.enviaDados}/>
                </div>
                <div className="col-md-8">
                <TabelaSeries series={this.state.lista} deleta={this.delete}/>
                </div>
              </div>
            </div>
        )
    }

}

export default BoxSeries