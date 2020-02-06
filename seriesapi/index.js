const app = require('./src/server.js')

// const app = costum_express()

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});

// app.get("/",(rec,res) => {
//     res.send('<h1>Primeira rota</h1>')
// });


