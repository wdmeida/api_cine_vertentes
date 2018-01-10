let Movie = require('../app/models/Movie');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

//Test the /GET route
describe('/GET movies cinegloria', () => {
  it('it should GET all cinegloria movies', (done) => {
    chai.request(server)
      .get('/api/v1/cinegloria/movies')
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.be.a({});
        res.body.length.should.be.eql(0);
      done();
      });
  });
});