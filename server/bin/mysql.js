const mysql = require('mysql2/promise');
module.exports.pool = mysql.createPool({
    host:'mysql',
    user:'root',
    password:'sDiM+OL2D6QXek',
    database:'taskmanager',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})