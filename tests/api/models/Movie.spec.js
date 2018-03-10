import 'module-alias/register';
import { expect } from 'chai';

import Movie from '@models/Movie';


describe('Movie', () => {
  describe('Smoke tests', () => {
    let movie;

    beforeEach(() => {
      movie = new Movie();

      movie.name = 'Name';
      movie.cover = 'Cover';
      movie.trailer = 'Trailer';
      movie.genre = 'Genre';
      movie.duration = 'Duration';
      movie.local = 'Local';
      movie.classification = 'Classification';
      movie.exhibition = 'Exhibition';
      movie.weekExhibition = 'Week Exhibition';
    });

    it('should have Movie model exist', () => {
      expect(Movie).to.exist;
    });

    it('should have name attribute is valid', () => {
      expect(movie.name).to.equal('Name');
    });

    it('should have cover attribute is valid', () => {
      expect(movie.cover).to.equal('Cover');
    });

    it('should have trailer attribute is valid', () => {
      expect(movie.trailer).to.equal('Trailer');
    });

    it('should have genre attribute is valid', () => {
      expect(movie.genre).to.equal('Genre');
    });

    it('should have duration attribute is valid', () => {
      expect(movie.duration).to.equal('Duration');
    });

    it('should have local attribute is valid', () => {
      expect(movie.local).to.equal('Local');
    });

    it('should have classification attribute is valid', () => {
      expect(movie.classification).to.equal('Classification');
    });

    it('should have exhibition attribute is valid', () => {
      expect(movie.exhibition).to.equal('Exhibition');
    });

    it('should have weekExhibition attribute is valid', () => {
      expect(movie.weekExhibition).to.equal('Week Exhibition');
    });
  });
});
