import React, { Component } from 'react';

const TabelaHead = () => {
    return(
        <thead className="thead-dark">
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
    )
}

const TabelaBody = (props) => {
    return (
        <tbody>  
            {props.lista.map(serie => {
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
    </tbody> 
    )
}

class TabelaSeries extends Component{

    render() {
        return(
            <div className="card">
                <div className="card-header">
                    Lista de series
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <TabelaHead />
                        <TabelaBody lista={this.props.lista} />
                    </table>
                </div>
            </div>
        )
    }
    
}

export default TabelaSeries