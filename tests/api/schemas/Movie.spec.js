import 'module-alias/register';
import {
  GraphQLList,
  GraphQLString,
} from 'graphql';
import chai, { expect } from 'chai';
import sinon from 'sinon';

import client from '@services/movies.services';
import Movie from '@schemas/Movie';

describe('Movie Schema', () => {
  const movieType = Movie._typeMap.MovieType;

  describe('Smoke tests', () => {
    context('Have fields', () => {
      it('should have an name field', () => {
        expect(movieType.getFields()).to.have.property('name');
      });

      it('should have an weekExhibition field', () => {
        expect(movieType.getFields()).to.have.property('weekExhibition');
      });

      it('should have an cover field', () => {
        expect(movieType.getFields()).to.have.property('cover');
      });

      it('should have an duration field', () => {
        expect(movieType.getFields()).to.have.property('duration');
      });

      it('should have an actors field', () => {
        expect(movieType.getFields()).to.have.property('actors');
      });

      it('should have an genre field', () => {
        expect(movieType.getFields()).to.have.property('genre');
      });

      it('should have an local field', () => {
        expect(movieType.getFields()).to.have.property('local');
      });

      it('should have an session field', () => {
        expect(movieType.getFields()).to.have.property('name');
      });

      it('should have an trailer field', () => {
        expect(movieType.getFields()).to.have.property('trailer');
      });

      it('should have an sinopse field', () => {
        expect(movieType.getFields()).to.have.property('sinopse');
      });
    });

    context('Types fields', () => {
      it('should have field name as GraphQLString', () => {
        expect(movieType.getFields().name.type).to.deep.equals(GraphQLString);
      });

      it('should have field weekExhibition as GraphQLString', () => {
        expect(movieType.getFields().weekExhibition.type).to.deep.equals(GraphQLString);
      });

      it('should have field cover as GraphQLString', () => {
        expect(movieType.getFields().cover.type).to.deep.equals(GraphQLString);
      });

      it('should have field duration as GraphQLString', () => {
        expect(movieType.getFields().duration.type).to.deep.equals(GraphQLString);
      });

      it('should have field actors as GraphQLString', () => {
        expect(movieType.getFields().actors.type).to.deep.equals(GraphQLString);
      });

      it('should have field genre as GraphQLString', () => {
        expect(movieType.getFields().genre.type).to.deep.equals(GraphQLString);
      });

      it('should have field local as GraphQLString', () => {
        expect(movieType.getFields().local.type).to.deep.equals(GraphQLString);
      });

      it('should have field session as GraphQLString', () => {
        expect(movieType.getFields().session.type).to.deep.equals(GraphQLString);
      });

      it('should have field trailer as GraphQLString', () => {
        expect(movieType.getFields().trailer.type).to.deep.equals(GraphQLString);
      });

      it('should have field sinopse as GraphQLString', () => {
        expect(movieType.getFields().sinopse.type).to.deep.equals(GraphQLString);
      });
    });

    describe('Resolve', () => {
      const sandbox = sinon.sandbox.create();

      beforeEach(() => {
        sandbox.stub(client, 'getMovies');
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getMovies', () => {
        sandbox.resolve();
        expect(client.getMovies).to.have.been.calledOnce;
      });
    });
  });
});
