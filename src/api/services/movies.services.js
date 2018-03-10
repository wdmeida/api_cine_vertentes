require('babel-polyfill');

const { getDomFromURL } = require('@utils/dom.utils');
const {
  CINE_GLORIA_MOVIES,
  SELECTOR_LIST_MOVIES_CINE_GLORIA,
} = require('@utils/constants');

// const Movie = require('@models/Movie');

const getMovies = async (
  url = CINE_GLORIA_MOVIES,
  selector = SELECTOR_LIST_MOVIES_CINE_GLORIA,
) => new Promise(async (resolve, reject) => {
  try {
    const dom = await getDomFromURL(url);
    const moviesList = dom.window.document.querySelectorAll(selector);
    resolve(moviesList);
  } catch (error) {
    reject(error);
  }
});


module.exports = { getMovies };
