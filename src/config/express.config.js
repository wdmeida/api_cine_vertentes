const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../api/schemas/Movie');
const allowCors = require('./cors');

module.exports = () => {
  const app = express();

  app.use(allowCors);

  app.use(
    '/api/v2/cinegloria/movies',
    graphqlHTTP({
      formatError: error => ({ message: error.message }),
      schema,
      graphiql: true,
    }),
  );

  return app;
};
