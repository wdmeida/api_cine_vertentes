require('module-alias/register');

class Movie {
  constructor(node) {
    this._node = node;
  }

  get name() {
    return this._node.children[1].children[0].children[0].textContent.trim();
  }

  get weekExhibition() {
    return this._node.children[1].children[0].children[1].textContent.replace(/\s+/g, ' ').trim();
  }

  get cover() {
    return this._node.children[0].src;
  }

  get duration() {
    return this._node.children[1].children[1].children[0].children[0].textContent.replace(/\s+/g, ' ').trim();
  }

  get actors() {
    return this._node.children[1].children[1].children[0].children[1].textContent.replace(/\s+/g, ' ').trim();
  }

  get genre() {
    return this._node.children[1].children[1].children[0].children[2].textContent.replace(/\s+/g, ' ').trim();
  }

  get local() {
    return this._node.children[1].children[1].children[0].children[4].textContent.replace(/\s+/g, ' ').trim();
  }

  get session() {
    return this._node.children[1].children[1].children[0].children[5].nextSibling.textContent.replace(/\s+/g, ' ').trim();
  }

  get trailer() {
    return this._node.children[1].children[1].children[0].children[8].href;
  }

  get sinopse() {
    return this._node.children[1].children[1].children[1].textContent.replace(/\s+/g, ' ').trim();
  }

  get allMovieInformation() {
    return {
      name: this.name,
      weekExhibition: this.weekExhibition,
      cover: this.cover,
      duration: this.duration,
      actors: this.actors,
      genre: this.genre,
      local: this.local,
      session: this.session,
      trailer: this.trailer,
      sinopse: this.sinopse,
    };
  }
}

module.exports = Movie;
