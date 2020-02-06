const express = require('express')
const seriesRoutes = require('./routes/seriesRoutes')
const auth = require('./routes/authRoutes')

const app = express()

app.use(express.json())
app.use('/auth', auth)
app.use('/series', seriesRoutes)


module.exports = app
