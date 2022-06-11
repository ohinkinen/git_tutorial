const mysql = require('mysql2');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud_tutorial_db'
});

dbConn.connect(function (error) {
    if (error) throw error;
    console.log('Database connected successfully!');
})

module.exports = dbConn;