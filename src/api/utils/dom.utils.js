const jsdom = require('jsdom');

const { JSDOM } = jsdom;

export function getDomFromURL(url = '') {
  if (url.length === 0) throw new Error('URL is required');
  return JSDOM.fromURL(url);
}

export function getTextContent(dom = {}, selector = '') {
  if (dom.window === undefined) throw new Error('DOM must contains a window property');

  if (selector.length === 0) throw new Error('Selector is required');

  return dom.window.document.querySelector(selector).textContent;
}

export const normalizeText = (content, expressionToRemove = '') => {
  if (expressionToRemove.length > 0) {
    return content.replace(expressionToRemove, '').replace(/\s+/g, ' ').trim();
  }
  return content.replace(/\s+/g, ' ').trim();
};
