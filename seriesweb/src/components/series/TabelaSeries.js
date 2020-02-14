import React, { Component } from 'react';

import './TabelaSeries.css'

// const TabelaHead = () => {
//     return(
//         <thead className="thead-dark">
//             <tr>
//                 <th width="200px">
//                     Nome
//                 </th>
//                 <th width="200px">
//                     Ano de Lançamento
//                 </th>
//                 <th width="200px">
//                     Temporadas
//                 </th>
//                 <th width="200px">
//                     Sinopse
//                 </th>
//             </tr>
//         </thead> 
//     )
// }

const ListaSeries = (props) => {

    return (
        <div className="card-body card-body-flex">
            {props.series.map(serie => {
                
                return (
                    <div className="card card-serie" key={serie.id}>
                        <div className="card-header">
                            <h5 className="card-title">{serie.nome}</h5>
                            <h6 className="card-title text-muted mb-1">{serie.ano_de_lancamento}</h6>
                        </div>
                    
                        <div className="card-body">
                            <img src="/serie.jpeg" className="card-img"/>
                        </div>
                        <div className="card-footer">
                            {serie.temporadas}
                            {serie.temporadas > 1 ? ' temporadas' : ' temporada'}
                            <br />
                            <a href="#">{'Sinopse: ' + serie.sinopse}</a>
                            <br/>
                            <button className="btn btn-outline-danger from-control mt-3 btn-sm" 
                                onClick={() => {
                                    if (window.confirm('Deseja excluir?'))
                                        props.deleta(serie.id)
                            }}>Delete
                            </button>
                            <button className="btn btn-outline-warning from-control mt-3 ml-3 btn-sm"
                                onClick={()=>{
                                    props.consulta(serie)
                            }}>Editar
                            </button>
                        </div>   
                    </div>
                )
            })}
        </div>
    )
}

class TabelaSeries extends Component{

    render() {

        const {series, deleta, consulta} = this.props

        return(
            <div className="card">
                <div className="card-header">
                    <h5 className="text-center">Lista de series</h5>
                </div>
                
                <ListaSeries series={series} deleta={deleta} consulta={consulta}/> 

            </div>
        )
    }
    
}

export default TabelaSeries