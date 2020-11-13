const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/guitar/reviews', (req, res) => {
  db.query('select * from reviews', (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('data from database query:', JSON.stringify(data));
      res.send(JSON.stringify(data));
    }
  })
})

app.post('/guitar/reviews', (req, res) => {
  db.query('insert into reviews (title, contents, stars, user, experience, dateSubmitted, location, upVotes, downVotes, pros, cons, wouldRecommend) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [req.body.title, req.body.contents, req.body.stars, req.body.user, req.body.experience, req.body.dateSubmitted, req.body.location, req.body.upVotes, req.body.downVotes, req.body.pros, req.body.cons, req.body.wouldRecommend], (err, data) => {
    if (err) {
      console.log('post error:', err);
      throw err;
    } else {
      console.log('post successful');
      res.send(data);
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
