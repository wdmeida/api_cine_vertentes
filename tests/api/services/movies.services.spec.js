import 'module-alias/register';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import moviesService, { getMovies } from '@services/movies.services';

chai.use(sinonChai);
chai.use(chaiAsPromised);
sinonStubPromise(sinon);

describe('movies.service', () => {
  describe('Smoke tests', () => {
    it('should have movies.service', () => {
      expect(moviesService).to.exist;
    });

    it('should have getMovies method', () => {
      expect(getMovies).to.exist;
    });
  });

  context('getMovies', () => {
    describe('Mock request', () => {
      let moviesStub;
      let promise;

      const moviesList = [
        { name: 'Movie 1', genre: 'Terror' },
        { name: 'Movie 2', genre: 'Terror' },
      ];

      beforeEach(() => {
        moviesStub = sinon.stub(global, 'Promise');
        promise = moviesStub.returnsPromise();
      });

      afterEach(() => {
        moviesStub.restore();
      });

      it('should call Promise', () => {
        getMovies();
        expect(moviesStub).to.have.been.calledOnce;
      });

      it('should returns the error with Promise is reject', () => {
        promise.rejects('Something went wrong in API. Try in a few minutes.');
        const movies = getMovies();

        expect(movies.rejectValue).to.eql('Something went wrong in API. Try in a few minutes.');
      });

      it('should returns the correct data from Promise', () => {
        promise.resolves(moviesList);
        const movies = getMovies();

        expect(movies.resolveValue).to.eql(moviesList);
      });
    });

    context('Request with valid url', () => {
      it('should return rejected in case of request failed', async () => {
        expect(getMovies('')).to.be.rejected;
      });

      it('should return resolve with response in case of request is valid', async () => {
        expect(getMovies()).to.be.fulfilled;
      });
    });
  });
});
