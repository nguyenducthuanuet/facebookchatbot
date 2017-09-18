const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uet-contacts'
});

export default {
    searchHumans: (name, callback) => {
        let query = `
        SELECT id, academic_title, name 
        FROM humans 
        WHERE LOWER(name) LIKE BINARY '% ${name.toLowerCase()}' OR LOWER(name) = '${name.toLowerCase()}'`;
        console.log(query);
        connection.query(query, (err, rows) => {
            callback(rows || []);
        })
    },

    detailHuman: (id, callback) => {
        let query = `
        SELECT id, academic_title, name
        FROM humans
        WHERE id = ${id}`;
        console.log(query);
        connection.query(query, (err, rows) => {
            callback(rows ? rows[0] : null);
        })
    },

    humanOffices: (id, callback) => {
        let query = `
        SELECT hd.position, d.name department_name
        FROM humans_departments hd
        INNER JOIN departments d ON hd.department_id = d.id
        WHERE hd.human_id = ${id}`;
        console.log(query);
        connection.query(query, (err, rows) => {
            callback(rows || []);
        })
    }
}