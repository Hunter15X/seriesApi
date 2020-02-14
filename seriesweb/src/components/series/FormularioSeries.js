import React, {Component} from 'react';


class FormularioSeries extends Component{

    constructor(){
      super()
    }

    inputHandler= (event) => {
        const {name, value} = event.target
    
        this.props.inputHandler(name, value)

        // this.setState({[name]: value})
      }
    
      enviaDados = (event) => {
        event.preventDefault()
        this.props.enviaDados(this.state);
        this.setState(this.stateInitial)
      }

    render(){

      const {serie} = this.props

        return(
            <div className="card">
              <div className="header">
                <h5 className="card-title text-center mt-4">
                  Cadastro de series
                </h5>
                <div className="card-body">
                  <form method="post" onSubmit={this.enviaDados}>
                          <div className="form-group">

                          <label htmlFor="nome">Nome</label>
                          <input type="text" id="nome" name="nome" onChange={this.inputHandler} value={serie.nome} className="form-control"/>

                          <label htmlFor="nome">Ano de Lançamento</label>
                          <input type="number" id="ano_lanc" name="ano_de_lancamento"  onChange={this.inputHandler} value={serie.ano_de_lancamento} className="form-control" />

                          <label htmlFor="nome">Temporadas</label>  
                          <input type="number" id="temporada" name="temporadas"  onChange={this.inputHandler} value={serie.temporadas} className="form-control"/>

                          <label htmlFor="sinopse">Sinopse</label>
                          <textarea id="sinopse" name="sinopse" resize="none"  onChange={this.inputHandler} value={serie.sinopse} className="form-control"></textarea>

                          <button type="submit" className="form-control mt-4 btn btn-success">Salvar</button>
                          </div>
                  </form>
                </div>
              </div>
            </div>
        )
    }

}

export default FormularioSeries