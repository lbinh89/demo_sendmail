const mysql = require('mysql');

// Connect database mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'sendmail'
});

connection.connect(function(err) {
    if (err) throw err
    console.log(`You are now connected database ${connection.config.database}`);

    // connection.query('SELECT * FROM category', function(err, results) {
    //     if (err) throw err;
    //     console.log(results)
    // });
});

module.exports = connection;