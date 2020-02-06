const mysql = require('mysql');

const conection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bcd127",
    database: "series_Api"
})


module.exports = conection;