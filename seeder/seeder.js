const mysql = require('mysql');
const faker = require('faker');
const db = require('../server/db/index.js');

// result arrays of all reviews/pros/cons
let reviews = [];
let prosObjects = [];
let consObjects = [];

// arrays to handle number of times a pro/con has been selected
let pros = ['Fun To Play', 'Good Feel', 'Good Tone', 'Good Pick Up', 'Solid Electronics'];
let prosCount = [0, 0, 0, 0, 0];
let cons = ['Flat Sound', 'Fret Buzz', 'Poor Pick Up', 'Poor Quality Craftsmanship', 'Poor Electronics'];
let consCount = [0, 0, 0, 0, 0];


for (let i = 0; i < 100; i++) {

  // arrays to grab pros/cons/experience level from
  let prosArr = ['Fun To Play', 'Good Feel', 'Good Tone', 'Good Pick Up', 'Solid Electronics'];
  let consArr = ['Flat Sound', 'Fret Buzz', 'Poor Pick Up', 'Poor Quality Craftsmanship', 'Poor Electronics'];
  let experienceArr = ['Kook', 'Novice', 'Experienced', 'Rockstar'];

  // experience variable to use in review below
  let randomExperience = experienceArr[Math.round(Math.random() * 3)]

  // random number for how many pros/cons to list
  let numberOfPros = Math.ceil(Math.random() * 5);
  let numberOfCons = Math.ceil(Math.random() * 2);

  // arrays to push pros/cons into for current review
  let reviewPros = [];
  let reviewCons = [];

  // push random pros/cons into respective arrays & increment number of times that pro/con has been selected
  for (let i = 0; i < numberOfPros; i++) {
    let index = Math.floor(Math.random() * prosArr.length);
    let pro = prosArr.splice(index, 1).toString()
    let prosIndex = pros.indexOf(pro);
    reviewPros.push(pro);
    prosCount[prosIndex] += 1;
  }
  for (let i = 0; i < numberOfCons; i++) {
    let index = Math.floor(Math.random() * consArr.length);
    let con = consArr.splice(index, 1).toString()
    let consIndex = cons.indexOf(con);
    reviewCons.push(con);
    consCount[index] += 1;
  }

  // generate random timestamp, modify to more friendly format
  let timestamp = faker.date.past(200).toString().split(' ');
  let date = timestamp[1] + ' ' + timestamp[2] + ','+ timestamp[3];

  description = (string) => {
    let stringArr = string.split(/[ -]+/);
    let firstWord = stringArr[0].split('');
    firstWord[0] = firstWord[0].toUpperCase();
    stringArr[0] = firstWord.join('');
    for (let i = 1; i < stringArr.length; i++) {
      stringArr[i] = stringArr[i].toLowerCase();
    }
    return stringArr.join(' ');
  }

  capitalizeTitle = (string) => {
    let stringArr = string.split(/[ -]+/);
    for (let i = 0; i < stringArr.length; i++) {
      let word = stringArr[i].split('');
      word[0] = word[0].toUpperCase();
      stringArr[i] = word.join('');
    }
    return stringArr.join(' ');
  }

  let contents = description(faker.random.words(40));
  let title = capitalizeTitle(faker.random.words(2) + ' ' + faker.commerce.productName());

  // creates a random review
  let randomReview = {
    id: i + 1,
    title: title,
    contents: contents,
    stars: faker.random.number({'min': 1, 'max': 5}),
    user: faker.name.firstName() + ' ' + faker.name.lastName(),
    experience: randomExperience,
    dateSubmitted: date,
    location: faker.address.city() + ', ' + faker.address.state(),
    upVotes: faker.random.number({'min': 1, 'max': 50}),
    downVotes: faker.random.number({'min': 1, 'max': 30}),
    pros: reviewPros.toString(),
    cons: reviewCons.toString(),
    wouldRecommend: faker.random.boolean()
  }
  reviews.push(randomReview);
}


// creates pro object and pushes into array with count and ID
for (let i = 0; i < pros.length; i++) {
  let singlePro = {
    proID: i + 1,
    description: pros[i],
    count: prosCount[i]
  }
  prosObjects.push(singlePro);
}


// creates con object and pushes into array with count and ID
for (let i = 0; i < cons.length; i++) {
  let singleCon = {
    conID: i + 1,
    description: cons[i],
    count: consCount[i]
  }
  consObjects.push(singleCon);
}

// seeds reviews into database
for (let i = 0; i < reviews.length; i++) {
  let review = reviews[i];
  db.connection.query('insert into reviews (id, title, contents, stars, user, experience, dateSubmitted, location, upVotes, downVotes, pros, cons, wouldRecommend) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [review.id, review.title, review.contents, review.stars, review.user, review.experience, review.dateSubmitted, review.location, review.upVotes, review.downVotes, review.pros, review.cons, review.wouldRecommend], (err, data) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log('review logged in database');
    }
  })
}

// seeds pros into database
for (let i = 0; i < prosObjects.length; i++) {
  let pro = prosObjects[i];
  db.connection.query('insert into pros (proID, description, count) values (?, ?, ?)', [pro.proID, pro.description, pro.count], (err, data) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log('pro logged in database');
    }
  })
}

// seeds cons into database
for (let i = 0; i < consObjects.length; i++) {
  let con = consObjects[i];
  db.connection.query('insert into cons (conID, description, count) values (?, ?, ?)', [con.conID, con.description, con.count], (err, data) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log('con logged in database');
    }
  })
}


db.connection.end();