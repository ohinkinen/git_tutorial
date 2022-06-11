const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mysql_db'
});

db.connect(function (error) {
    if (error) throw error;
    console.log('Database connected successfully!');
})

module.exports = db;