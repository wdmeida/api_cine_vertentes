// Importa os módulos que serão utilizados.
const express = require('express');
const load = require('express-load');
const allowCors = require('./cors');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || 8080);
  app.use(allowCors);

  load('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
