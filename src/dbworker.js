const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uet-contacts'
});

export default {
    searchHuman: (name, callback) => {
        connection.query(`SELECT * FROM humans WHERE name LIKE '%${name}%'`, function(err, rows, field) {
            callback(rows);
        })
    }
}