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

module.exports = {
  connection,
  url
};