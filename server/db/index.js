const mysql = require('mysql');

const host  = 'localhost';
const port  = 3004;
const url   = `http://${host}:${port}`;
const user = 'root';
const database = 'guitarReviews';
const password = '';

const connection = mysql.createConnection({
  user: user,
  database: database,
  password: password,
});

module.exports = {
  connection,
  url
};