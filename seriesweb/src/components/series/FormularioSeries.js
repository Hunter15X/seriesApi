import React, {Component} from 'react';


class FormularioSeries extends Component{

    constructor(){
        super()
        this.stateInitial = {
          nome: "",
          lancamento: "",
          temporadas: "",
          sinopse: ""

        }
        this.state = this.stateInitial
      }

    inputHandler= (event) => {
        const {name, value} = event.target
    
        this.setState({[name]: value})
      }
    
      enviaDados = (event) => {
        event.preventDefault()
        this.props.enviaDados(this.state);
        this.setState(this.stateInitial)
      }

    render(){
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
                          <input type="text" id="nome" name="nome" onChange={this.inputHandler} value={this.state.nome} class="form-control"/>

                          <label htmlFor="nome">Ano de Lançamento</label>
                          <input type="number" id="ano_lanc" name="lancamento"  onChange={this.inputHandler} value={this.state.lancamento} class="form-control" />

                          <label htmlFor="nome">Temporadas</label>
                          <input type="number" id="temporada" name="temporadas"  onChange={this.inputHandler} value={this.state.temporadas} class="form-control"/>

                          <label htmlFor="sinopse">Sinopse</label>
                          <textarea id="sinopse" name="sinopse" resize="none"  onChange={this.inputHandler} value={this.state.sinopse} class="form-control"></textarea>

                          <button type="submit" class="form-control mt-4 btn btn-success">Salvar</button>
                          </div>
                  </form>
                </div>
              </div>
            </div>
        )
    }

}

export default FormularioSeries