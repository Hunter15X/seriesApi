const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const usuarioDao =  new (require("../models/Usuarios"))()
const {secret} = require('../Config/auth.json')
const bcrypt = require("bcryptjs")

const gerarToken = (params) => {
    return jwt.sign( {params}, secret, {expiresIn: 60})
}

module.exports = {

    async registrar(req, res) {
        const erros = validationResult(req)

        if(!erros.isEmpty()){
            res.status(400).send(erros)
            return
        }

        let usuario = req.body;

        try{

            usuario.senha = await bcrypt.hash(usuario.senha, 10)

            const resultado = await usuarioDao.inserir(usuario)
            usuario = {id: resultado.inserirId,...usuario}

            return res.status(201).send({...usuario, token: gerarToken({id: usuario.id})})

        } catch{
            return res.status(500).send(erro)
        }
    },

    async autenticar(req, res){
        const {email, senha } = req.body;

        try{
            
        let usuario = await usuarioDao.buscaPorEmail(email)
        usuario = usuario[0]

        if(!usuario)
           return res.status(400).send({erro: "Usuario não encontrado"})
        
        if(!await bcrypt.compare(senha, usuario.senha))
            return res.status(400).send({erro: "Senha invalida"})

        return res.status(200).send({usuario, token: gerarToken({id: usuario.id})})

        } catch(erro){

            return res.status(500).send(erro)

        }
    }


}

// const autenticacao = (app) => {


    // app.post("/registrar", usuarioValidator.validations(), (req, res) =>{

    //     const erros = validationResult(req)

    //     if(!erros.isEmpty()){
    //         res.status(400).send(erros)
    //         return
    //     }

    //     const usuario = req.body;

    //     const usuarioDao = app.models.Usuarios;

    //     usuarioDao.inserir(usuario)
    //         .then(usuario => {
    //             console.log(usuario)
    //             const token = gerarToken({id: usuario.id})
    //             res.status(201).send({...usuario, token})
    //         })
    //         .catch(erro => res.status(500).send(erro))

    // })

    // app.post("/autentificar", async(req, res) => {
    //     const {email, senha } = req.body;

    //     const usuarioDao = app.models.Usuarios

    //     try{
            
    //     const usuario = await usuarioDao.buscaPorEmail(email)

    //     if(!usuario)
    //        return res.status(400).send({erro: "Usuario não encontrado"})
        
    //     if(usuario.senha != senha)
    //         return res.status(400).send({erro: "Senha invalida"})



    //     const token = gerarToken({id: usuario.id})



    //     return res.status(200).send({usuario, token})

    //     } catch(erro){

    //         return res.status(500).send(erro)

    //     }
    // })

// }

// module.exports = autenticacao;
