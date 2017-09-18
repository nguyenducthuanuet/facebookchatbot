const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uet-contacts'
});

export default {
    searchHuman: (name, callback) => {
        let query = `SELECT * FROM humans WHERE name LIKE '%${name}%'`;
        console.log(query);
        connection.query(query, function(err, rows, field) {
            callback(rows || []);
        })
    },

    detallHuman: (id, callback) => {
        let query = `
        SELECT h.academic_title, h.name, hd.position, d.name department_name
        FROM humans h 
        LEFT JOIN humans_departments hd ON h.id = hd.human_id
        LEFT JOIN departments d ON d.id = hd.department_id  
        WHERE id = ${id}`;
        console.log(query);
        connection.query(query, function(err, rows, field) {
            callback(rows || []);
        })
    }
}