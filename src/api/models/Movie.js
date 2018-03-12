const { normalizeText } = require('../utils/dom.utils');

class Movie {
  constructor(node) {
    this._node = node;
  }

  get name() {
    return this._node.children[1].children[0].children[0].textContent;
  }

  get weekExhibition() {
    return this._node.children[1].children[0].children[1].textContent;
  }

  get cover() {
    return this._node.children[0].src;
  }

  get duration() {
    return this._node.children[1].children[1].children[0].children[0].textContent;
  }

  get actors() {
    return this._node.children[1].children[1].children[0].children[1].textContent;
  }

  get genre() {
    return this._node.children[1].children[1].children[0].children[2].textContent;
  }

  get local() {
    return this._node.children[1].children[1].children[0].children[4].textContent;
  }

  get session() {
    return this._node.children[1].children[1].children[0].children[5].nextSibling.textContent;
  }

  get trailer() {
    return this._node.children[1].children[1].children[0].children[8].href;
  }

  get sinopse() {
    return this._node.children[1].children[1].children[1].textContent;
  }

  get allMovieInformation() {
    return {
      name: normalizeText(this.name),
      weekExhibition: normalizeText(this.weekExhibition),
      cover: normalizeText(this.cover),
      duration: normalizeText(this.duration, 'Duração:'),
      actors: normalizeText(this.actors, 'Atores:'),
      genre: normalizeText(this.genre, 'Gênero:'),
      local: normalizeText(this.local),
      session: normalizeText(this.session),
      trailer: normalizeText(this.trailer),
      sinopse: normalizeText(this.sinopse),
    };
  }
}

module.exports = Movie;
