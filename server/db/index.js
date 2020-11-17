const mysql = require('mysql');

const host  = 'localhost';
const port  = 4000;
const url   = `http://${host}:${port}`;
const user = 'root';
const database = 'guitarReviews';

const connection = mysql.createConnection({
  user: user,
  database: database
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    console.error('mysql database not connected')
    return;
  }
  console.log('database connected successfully')
});

module.exports = {
  connection,
  url
};