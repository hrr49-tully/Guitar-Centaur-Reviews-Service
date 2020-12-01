const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const db = require('./db').connection;

const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/reviews/:endpoint', (req, res) => {
  let table = req.url.split('/')[3];
  db.query(`select * from ${table}`, (err, data) => {
    if (err) {
      console.error(`${table} query failed: `, err);
    } else {
      console.log(`${table} query successful`);
      res.send(JSON.stringify(data));
    };
  });
});

app.get('/api/reviews/stars/:endpoint', (req, res) => {
  const endpoint = req.url.split('/')[4];
  if (endpoint.length > 1) {
    db.query(`select * from reviews order by stars ${endpoint}`, (err, data) => {
      if (err) {
        console.error(`reviews by stars ${endpoint} failed: `, err);
      } else {
        console.log(`reviews by stars ${endpoint} successful`);
        res.send(JSON.stringify(data));
      };
    });
  } else {
    db.query(`select * from reviews where stars=${endpoint}`, (err, data) => {
      if (err) {
        console.error(`reviews with ${endpoint} stars query failed: `, err);
      } else {
        console.log(`reviews with ${endpoint} stars query successful`);
        res.send(JSON.stringify(data));
      };
    });
  };
});

app.get('/api/reviews/sort/upVotes', (req, res) => {
  db.query(`select * from reviews order by upVotes desc`, (err, data) => {
    if (err) {
      console.error('reviews sorted by upVotes query failed: ', err)
    } else {
      console.log('reviews sorted by upVotes query successful');
      res.send(JSON.stringify(data));
    };
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
