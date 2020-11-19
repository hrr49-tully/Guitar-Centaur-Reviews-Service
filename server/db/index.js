const mysql = require('mysql');

const host  = 'localhost';
const port  = 3004;
const url   = `http://${host}:${port}`;
const user = 'student';
const password = 'password';
const database = 'guitarReviews';

const connection = mysql.createConnection({
  user: user,
  password: password,
  database: database
});

module.exports = {
  connection,
  url
};