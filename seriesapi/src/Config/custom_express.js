const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken')
const authConfig = require('./auth.json.js')

const app = express();

const auth = require('./routes/authRoutes')
const series = require('/routes/seriesRoutes')

app.use("/auth", auth)

app.use(authMidd)

app.use("series", series)

const costumExpress = () => {

    app.use(bodyParser.json())

           // USE

           app.use((req, res, next) => {
            const authHeader = req.headers.authorization
    
            if(!authHeader)
                return res.status(401).send({erro: "token não encontrado"})
            
            const parts = authHeader.split(' ')
    
            if(!parts.length == 2)
                return res.status(401).send({erro: "token mal formatado"})
            
            const [bearer, token] = parts
    
            jwt.verify(token, authConfig.secret, (erro, user) => {
    
                if(erro)
                    return res,status(401).json({erro: "token invalido"})
            
                    req.userId = user.id;
    
                return next()
    
            })
    
        })

    // Injeção de dependencias do app
    consign()
        .include('controllers')
        .include('models')
        .into(app);

    return app;
}

module.exports = costumExpress();