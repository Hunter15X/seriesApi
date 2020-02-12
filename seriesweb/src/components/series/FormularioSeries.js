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
            <div>
                <form method="post" onSubmit={this.enviaDados}>
                        <div className="form">

                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" onChange={this.inputHandler} value={this.state.nome} />

                         <label htmlFor="nome">Ano de Lançamento</label>
                        <input type="number" id="ano_lanc" name="lancamento"  onChange={this.inputHandler} value={this.state.lancamento}/>

                        <label htmlFor="nome">Temporadas</label>
                        <input type="number" id="temporada" name="temporadas"  onChange={this.inputHandler} value={this.state.temporadas} />

                        <label htmlFor="sinopse">Sinopse</label>
                        <textarea id="sinopse" name="sinopse"  onChange={this.inputHandler} value={this.state.sinopse}></textarea>

                        <button type="submit">Salvar</button>
                        </div>
                </form>
            </div>
        )
    }

}

export default FormularioSeries