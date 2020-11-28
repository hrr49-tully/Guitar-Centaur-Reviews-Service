const mysql = require('mysql');

const host  = 'localhost';
const port  = 3004;
const url   = `http://${host}:${port}`;
const user = 'root';
const database = 'guitarReviews';
const password = 'password';

const connection = mysql.createConnection({
  user: user,
  database: database,
  password: '',
});

module.exports = {
  connection,
  url
};