const conexao = require('../Infra/conexao')

module.exports =  (sql, params) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql ,params || "", (erro, resultados) => {

            if(erro) return reject(erro)

            resolve(resultados)

        })
    })
}