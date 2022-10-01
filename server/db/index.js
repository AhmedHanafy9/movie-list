var mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movielist'
});


connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('You are connected');
  }
});


module.exports = connection;