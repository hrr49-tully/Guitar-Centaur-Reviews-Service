const mysql = require('mysql');
const faker = require('faker');
const db = require('../server/db/index/js');

let reviews = [];
let pros = [];
let cons = [];

for (let i = 0; i < 10; i++) {


  let randomReview = {
    id: i,
    title: faker.lorem.sentence(),
    contents: faker.lorem.paragraph(),
    stars: faker.random.number({'min': 1, 'max': 5}),
    user: faker.name.firstName() + faker.name.lastName(),
    experience: randomExperience,
    dateSubmitted: randomDateTime,
    location: faker.address.city() + faker.address.state,
    upVotes: faker.random.number({'min': 1, 'max': 50}),
    downVotes: faker.random.number({'min': 1, 'max': 30}),
    pros: randomPros,
    cons: randomCons,
    wouldRecommend: faker.random.boolean()
  }
  console.log(randomReview);
}

// iterate over array of pros
for (let i = 0; i < 10; i++) {
  let pros = {
    proID: i,
    description: randomPros,
    count: faker.random.number({'min': 1, 'max': 50})
  }
}


// iterate over array of cons
for (let i = 0; i < 10; i++) {
  let cons = {
    conID: i,
    description: randomCons,
    count: faker.random.number({'min': 1, 'max': 40})
  }
}
