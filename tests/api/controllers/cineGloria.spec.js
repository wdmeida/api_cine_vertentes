import 'module-alias/register';
import { expect } from 'chai';

import cineGloria from '@controllers/cineGloria';

describe('cineGloria', () => {
  describe('Smoke tests', () => {
    it('should have cineGloria controller', () => {
      expect(cineGloria).to.exist;
    });
  });
});
