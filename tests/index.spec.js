import 'module-alias/register';

import chai, { expect } from 'chai';
import request from 'request-promise';
import sinon from 'sinon';

import { start, stop } from '@src/';

describe('Integration test', () => {
  let server;

  before(() => {
    server = start();
  });

  after(() => {
    stop(server);
  });

  context('Resolver request with full attributes', () => {
    const query = `{
      movies{
        name
        weekExhibition
        cover
        duration
        actors
        genre
        local
        session
        trailer
        sinopse
      }
    }`;

    it('should resolver full attributes', () => (
      request({
        baseUrl: 'http://localhost:8080',
        uri: '/api/v2/cinegloria/movies',
        qs: {
          query,
        },
        resolveWithFullResponse: true,
        json: true,
      }).then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.exist;
        expect(response.body).to.have.keys('data');
      })
    ));

    it('should not resolver', () => (
      request({
        baseUrl: 'http://localhost:8080',
        uri: '/api/v2/cinegloria/movies',
        resolveWithFullResponse: true,
        json: true,
      }).catch((error) => {
        expect(error.statusCode).to.equal(400);
      })
    ));
  });
});
