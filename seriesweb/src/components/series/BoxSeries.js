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

    render() {
        return(
            <div>
                <FormularioSeries enviaDados={this.enviaDados}/>
                <TabelaSeries lista={this.state.lista}/>
            </div>
        )
    }

}

export default BoxSeries