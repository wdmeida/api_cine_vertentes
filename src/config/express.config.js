const express = require('express');
const consign = require('consign');
const allowCors = require('./cors');

module.exports = () => {
  const app = express();

  app.use(allowCors);

  consign({ cwd: 'src/api' })
    .include('models')
    .then('routes')
    .into(app);

  return app;
};
