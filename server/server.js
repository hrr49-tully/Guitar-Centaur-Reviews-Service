const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db').connection;

const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/reviews/:endpoint', (req, res) => {
  let table = req.url.split('/')[3];
  console.log(req.url, table);
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
  console.log(req.url);
  const endpoint = req.url.split('/')[4];
  if (endpoint.length > 1) {
    console.log('WE OUTCHYEA STARS ORDER');
    db.query(`select * from reviews order by stars ${endpoint}`, (err, data) => {
      if (err) {
        console.error(`reviews by stars ${endpoint} failed: `, err);
      } else {
        console.log(`reviews by stars ${endpoint} successful`);
        res.send(JSON.stringify(data));
      };
    });
  } else {
    console.log('WE OUTCHYEA STARS NUMBERS');
    db.query(`select * from reviews where stars=${endpoint}`, (err, data) => {
      if (err) {
        console.error(`reviews with ${endpoint} query failed: `, err);
      } else {
        console.log(`reviews with ${endpoint} query successful`);
        res.send(JSON.stringify(data));
      };
    });
  };
});

app.post('/guitar/reviews', (req, res) => {
  db.query('insert into reviews (title, contents, stars, user, experience, dateSubmitted, location, upVotes, downVotes, pros, cons, wouldRecommend) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [req.body.title, req.body.contents, req.body.stars, req.body.user, req.body.experience, req.body.dateSubmitted, req.body.location, req.body.upVotes, req.body.downVotes, req.body.pros, req.body.cons, req.body.wouldRecommend], (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log('post successful');
      res.send(data);
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
