const { getTextContent } = require('@utils/dom.utils');

class Movie {
  constructor(dom) {
    this._dom = dom;
  }

  get name() {
    const selectorName = 'tetete';
    return getTextContent(this._dom, selectorName);
  }

  get cover() {
    const selectorCover = 'tetete';
    return getTextContent(this._dom, selectorCover);
  }

  get trailer() {
    const selectorTrailer = 'tetete';
    return getTextContent(this._dom, selectorTrailer);
  }

  get genre() {
    const selectorGenre = 'tetete';
    return getTextContent(this._dom, selectorGenre);
  }

  get duration() {
    const selectorDuration = 'tetete';
    return getTextContent(this._dom, selectorDuration);
  }

  get local() {
    const selectorLocal = 'tetete';
    return getTextContent(this._dom, selectorLocal);
  }

  get classification() {
    const selectorClassification = 'tetete';
    return getTextContent(this._dom, selectorClassification);
  }

  get exhibihion() {
    const selectorExhibition = 'tetete';
    return getTextContent(this._dom, selectorExhibition);
  }

  get weekExhibition() {
    const selectorWeekExhibition = 'tetete';
    return getTextContent(this._dom, selectorWeekExhibition);
  }
}

module.exports = Movie;
