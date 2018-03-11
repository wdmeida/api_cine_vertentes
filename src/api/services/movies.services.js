require('babel-polyfill');

const {
  CINE_GLORIA_MOVIES,
  SELECTOR_LIST_MOVIES_CINE_GLORIA,
} = require('@utils/constants');
const { getDomFromURL } = require('@utils/dom.utils');
const Movie = require('@models/Movie');

const getMovies = async (
  url = CINE_GLORIA_MOVIES,
  selector = SELECTOR_LIST_MOVIES_CINE_GLORIA,
) => new Promise(async (resolve, reject) => {
  try {
    const dom = await getDomFromURL(url);
    const moviesNode = dom.window.document.querySelectorAll(selector);
    const movies = [];

    moviesNode.forEach((movieDom) => {
      const movie = new Movie(movieDom);
      movies.push(movie.allMovieInformation);
    });
    resolve(movies);
  } catch (error) {
    reject(error);
  }
});


module.exports = { getMovies };
