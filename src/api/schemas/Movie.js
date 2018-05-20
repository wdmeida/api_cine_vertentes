const { get } = require('lodash');
const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require('graphql');

const service = require('../services/movies.services');

const MovieType = new GraphQLObjectType({
  name: 'MovieType',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (root, args) => root.name,
    },
    weekExhibition: {
      type: GraphQLString,
      resolve: (root, args) => root.weekExhibition,
    },
    cover: {
      type: GraphQLString,
      resolve: (root, args) => root.cover,
    },
    duration: {
      type: GraphQLString,
      resolve: (root, args) => root.duration,
    },
    actors: {
      type: GraphQLString,
      resolve: (root, args) => root.actors,
    },
    genre: {
      type: GraphQLString,
      resolve: (root, args) => root.genre,
    },
    local: {
      type: GraphQLString,
      resolve: (root, args) => root.local,
    },
    session: {
      type: GraphQLString,
      resolve: (root, args) => root.session,
    },
    trailer: {
      type: GraphQLString,
      resolve: (root, args) => root.trailer,
    },
    sinopse: {
      type: GraphQLString,
      resolve: (root, args) => root.sinopse,
    },
  }),
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'movies',
    description: 'This schema which will all movies informations',
    fields: () => ({
      movies: {
        type: new GraphQLList(MovieType),
        args: {
          url: {
            type: GraphQLString,
          },
          selector: {
            type: GraphQLString,
          },
        },
        resolve: (root, args) => service.getMovies(),
      },
    }),
  }),
});
