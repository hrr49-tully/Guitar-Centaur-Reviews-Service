const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'guitarReviews'
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    console.error('mysql database not connected')
    return;
  }
  console.log('database connected successfully')
});

module.exports = connection;