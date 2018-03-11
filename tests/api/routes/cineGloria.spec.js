import 'module-alias/register';
import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '@src/index';

import cineGloria from '@routes/cineGloria';

chai.use(chaiHTTP);

describe('cineGloria routes', () => {
  describe('Smoke tests', () => {
    it('should have cineGloria routes', () => {
      expect(cineGloria).to.exist;
    });
  });

  describe('/GET /api/v2/cinegloria/movies', () => {
    it('should GET all the movies', () => {
      chai.request(app)
        .get('/api/v2/cinegloria/movies')
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
    });
  });
});
