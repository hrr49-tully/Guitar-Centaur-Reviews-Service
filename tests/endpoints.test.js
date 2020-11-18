const connection = require('../server/db/index.js');
const request = require('supertest')(`${connection.url}`);

describe('a GET request to /api/reviews endpoint', () => {
  it('Should get all reviews from database', (done) => {
    request.get('/api/reviews').expect(200).expect(res => {
      expect(res).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });
});

describe('a GET request to /api/reviews endpoint', () => {
  it('Should get correct reviews info from database', (done) => {
    request.get('/api/reviews').expect(200).expect(res => {
      expect(JSON.parse(res.text)[0].id).toEqual(1);
      expect(JSON.parse(res.text)[10].id).toEqual(11);
    }).end(done);
  });
});

describe('a GET request to /api/pros endpoint', () => {
  it('Should get all pros from database', (done) => {
    request.get('/api/pros').expect(200).expect(res => {
      expect(res).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });
});

describe('a GET request to /api/pros endpoint', () => {
  it('Should get correct pros info from database', (done) => {
    request.get('/api/pros').expect(200).expect(res => {
      expect(JSON.parse(res.text)[0].count).toEqual(55);
      expect(JSON.parse(res.text)[4].description).toEqual('Solid Electronics');
    }).end(done);
  });
});

describe('a GET request to /api/cons endpoint', () => {
  it('Should get all cons from database', (done) => {
    request.get('/api/cons').expect(200).expect(res => {
      expect(res).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });
});

describe('a GET request to /api/cons endpoint', () => {
  it('Should get correct cons info from database', (done) => {
    request.get('/api/cons').expect(200).expect(res => {
      expect(JSON.parse(res.text)[0].count).toEqual(43);
      expect(JSON.parse(res.text)[2].description).toEqual('Poor Pick Up');
    }).end(done);
  });
});