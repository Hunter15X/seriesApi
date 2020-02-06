// npm -> Gerenciador de pacotes
const http = require('http');

// Arrow function 
const servidor = http.createServer((rec,res) => {
    
    res.end('<h1>Hello World!!</h1>');
});

servidor.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});