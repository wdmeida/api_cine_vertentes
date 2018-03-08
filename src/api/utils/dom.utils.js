const { JSDOM } = require('jsdom');

export function getDomFromURL(url = '') {
  return JSDOM.fromURL(url);
}

export function getTextContent() {}
