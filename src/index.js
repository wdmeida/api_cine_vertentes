const app = require('./config/express.config')();

const PORT = process.env.PORT || 8080;

const start = () => app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));

const stop = server => server.close();

if (process.env.NODE_ENV !== 'test') {
  const server = start();
}

module.exports = { start, stop };
