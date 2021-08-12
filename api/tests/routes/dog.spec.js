const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  id: '201b4a8a-5c56-4d51-a559-dabb25b89287',
  height: "25 - 30",
  weight: "20 - 40"
};

describe('Dog routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs/:id', () => {
    it('deberia devolver 200 si encuentra el id', () =>
      agent.get('/dogs/201b4a8a-5c56-4d51-a559-dabb25b89287').expect(200)
    );
    it('deberia devolver 200 si busca en la api', () =>{
      agent.get('/pokemons/2').expect(200)
    });
    it('deberia devolver 404 si no encuentra ninguno con ese id', () =>{
      agent.get('/pokemons/123456789').expect(404)
    });
  });
});