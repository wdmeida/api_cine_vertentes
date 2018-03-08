import 'module-alias/register';
import { expect } from 'chai';

import Movie from '@models/Movie';


describe('Movie', () => {
  describe('Smoke tests', () => {
    it('should Movie model exist', () => {
      expect(Movie).to.exist;
    });

    it('should have name method exist', () => {
      expect(Movie.name).to.exist;
    });

    it('should have cover method exist', () => {
      expect(Movie.cover).to.exist;
    });

    it('should have trailer method exist', () => {
      expect(Movie.trailer).to.exist;
    });

    it('should have genre method exist', () => {
      expect(Movie.genre).to.exist;
    });

    it('should have duration method exist', () => {
      expect(Movie.duration).to.exist;
    });

    it('should have local method exist', () => {
      expect(Movie.local).to.exist;
    });

    it('should have classification method exist', () => {
      expect(Movie.classification).to.exist;
    });

    it('should have exhibition method exist', () => {
      expect(Movie.exhibition).to.exist;
    });

    it('should have weekExhibition method exist', () => {
      expect(Movie.weekExhibition).to.exist;
    });
  });
});
