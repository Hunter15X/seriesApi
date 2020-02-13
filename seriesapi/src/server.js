const express = require('express')
const seriesRoutes = require('./routes/seriesRoutes')
const auth = require('./routes/authRoutes')

const app = express()

let allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
}

app.use(express.json())
app.use(allowCrossDomain)

app.use('/auth', auth)
app.use('/series', seriesRoutes)


module.exports = app
