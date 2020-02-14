import React, { Component } from 'react';

import FormularioSeries from './FormularioSeries';
import TabelaSeries from './TabelaSeries';

class BoxSeries extends Component {
    
    constructor() {
        super()
        
        this.novaSerie = {
            nome: "",
            ano_de_lancamento: "",
            temporadas : "",
            sinopse: ""
        }

        this.state = {
          lista: [],
          serie: this.novaSerie
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

    enviaDados = async () => {
      let {serie} = this.state

      const params = {
        method: serie.id ? 'PUT': 'POST',
        headers: {  
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serie)
      }

      try{
        const res = await fetch('http://localhost:3000/series/' + serie.id || '', params)

        if(res.status === 201){
          console.log('Enviado com sucesso')
          serie = await res.json()
          this.setState({
            lista: [...this.state.lista, serie]
          })

          console.log(serie)
        }

        else if(res.status === 200 ){
          serie = await res.json()

          this.setState({
            lista: this.state.lista.map(s => s.id == serie.id ? serie: s),
            serie: this.novaSerie
          })

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

    inputHandler = (name, value) => {
      this.setState({serie: {...this.state.serie, [name]: value}})
    }

    consulta = (series) => {
      console.log(series)
      this.setState({serie: series})
    }

    render() {
        return(
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                <FormularioSeries enviaDados={this.enviaDados} serie={this.state.serie} inputHandler={this.inputHandler}/>
                </div>
                <div className="col-md-8">
                <TabelaSeries series={this.state.lista} deleta={this.delete} consulta={this.consulta}/>
                </div>
              </div>
            </div>
        )
    }

}

export default BoxSeries