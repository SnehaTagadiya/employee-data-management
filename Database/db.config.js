const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '$nehajay279',
    database: 'fullstackbatch'
});
dbConn.connect(function(error) {
    if (error) throw error;
    console.log("database connected successfully");
})

module.exports = dbConn;