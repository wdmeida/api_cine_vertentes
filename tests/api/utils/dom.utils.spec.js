import 'module-alias/register';
import 'jsdom-global/register';
import chai, { expect } from 'chai';
import { JSDOM } from 'jsdom';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import {
  getDomFromURL,
  getTextContent,
  normalizeText,
} from '@utils/dom.utils';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('dom.utils', () => {
  describe('Smoke tests', () => {
    it('should have getDomFromURL method exists', () => {
      expect(getDomFromURL).to.exist;
    });

    it('should have getTextContent method exists', () => {
      expect(getTextContent).to.exist;
    });
  });

  describe('getDomFromURL', () => {
    let stubedJSDOM;

    beforeEach(() => {
      stubedJSDOM = sinon.stub(JSDOM, 'fromURL');
    });

    afterEach(() => {
      stubedJSDOM.restore();
    });

    it('should return an exception when the URL is invalid', () => {
      expect(getDomFromURL).to.throw('URL is required');
    });

    it('should call fromURL function', () => {
      const dom = getDomFromURL('url');
      expect(stubedJSDOM).to.have.been.calledOnce;
    });

    it('should call fromURL with the correct URL', () => {
      const dom = getDomFromURL('http://www.cinegloria.com/programacao/');
      expect(stubedJSDOM).to.have.been.calledWith('http://www.cinegloria.com/programacao/');

      const dom2 = getDomFromURL('https://www.cineplaza.com.br/');
      expect(stubedJSDOM).to.have.been.calledWith('https://www.cineplaza.com.br/');
    });
  });

  describe('getTextContent', () => {
    const dom = new JSDOM('<p>Hello<img src="foo.jpg"></p>', { includeNodeLocations: true });

    it('should returns an exception with the dom is undefined', () => {
      expect(() => getTextContent(undefined)).to.throw('DOM must contains a window property');
    });

    it('should return an exception with the selector is empty', () => {
      expect(() => getTextContent(dom)).to.throw('Selector is required');
    });

    it('should call window with the correct value', () => {
      const textContent = getTextContent(dom, 'p');
      expect(textContent).to.have.equal('Hello');
    });
  });

  describe('normalizeText', () => {
    const textToNormalize = 'Atenção:     Este texto deve ser normalizado.';

    it('should have must remove the additional spaces in the text', () => {
      const textNormalized = normalizeText(textToNormalize);
      expect(textNormalized).to.equal('Atenção: Este texto deve ser normalizado.');
    });

    it('should have must remove the additional spaces and requested wo', () => {
      const textNormalized = normalizeText(textToNormalize, 'Atenção:');
      expect(textNormalized).to.equal('Este texto deve ser normalizado.');
    });
  });
});

