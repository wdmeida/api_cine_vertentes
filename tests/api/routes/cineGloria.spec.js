import 'module-alias/register';
import { expect } from 'chai';

import cineGloria from '@routes/cineGloria';

describe('cineGloria routes', () => {
  describe('Smoke tests', () => {
    it('should have cineGloria routes', () => {
      expect(cineGloria).to.exist;
    });
  });

  describe('/GET /api/v2/cinegloria/movies', () => {

  });
});
