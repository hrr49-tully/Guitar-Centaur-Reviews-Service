const connection = require('../server/db/index.js');
const request = require('supertest')(`${connection.url}`);

describe('a GET request /guitar/reviews endpoint', () => {
  it('Should get all reviews from database', (done) => {
    request.get('/guitar/reviews').expect(200).expect((res) => {
      expect(res).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });
});

describe('a GET request /guitar/reviews endpoint', () => {
  it('Should get correct info from database', (done) => {
    request.get('/guitar/reviews').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].id).toEqual(1);
      expect(JSON.parse(res.text)[10].id).toEqual(11);
    }).end(done);
  });
});