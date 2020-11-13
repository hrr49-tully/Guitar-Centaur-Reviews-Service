const mysql = require('mysql');

let connection = mysql.createConnection({
  user: 'root',
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