/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../app');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  imagen: 'aasd',
  altura: '11',
  peso: '11',
  life_span: '12',
  temperament: 'Manija, Friendly',

};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs/', () => {
    it('should get 200', () =>
      agent.get('/dogs/').expect(200)
    );
  });

  describe('GET /dogs/created', ()=>{
    it('should get 200', () =>
    agent.get('/dogs/created').expect(200))
  })
});
