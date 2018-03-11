import 'module-alias/register';

const { getMovies } = require('@services/movies.services');

module.exports = (api) => {
  api.get('/api/v2/cinegloria/movies', (req, res) => {
    const obj = {};

    try {
      const movies = getMovies();
      obj.movies = movies;
      res.status(200).json(obj);
    } catch (error) {
      obj.error = 'Something went wrong in API. Try in a few minutes.';
      res.status(500).json(obj);
    }
  });
};
