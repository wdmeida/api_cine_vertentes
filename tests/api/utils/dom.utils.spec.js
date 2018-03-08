import 'module-alias/register';
import 'jsdom-global/register';
import chai, { expect } from 'chai';
import { JSDOM } from 'jsdom';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

import {
  getDomFromURL,
  getTextContent,
} from '@utils/dom.utils';

describe('dom.utils', () => {
  it('should have getDomFromURL method exists', () => {
    expect(getDomFromURL).to.exist;
  });

  it('should have getTextContent method exists', () => {
    expect(getTextContent).to.exist;
  });
});

describe('getDomFromURL', () => {
  let promise;
  let stubedJDOM;

  beforeEach(() => {
    stubedJDOM = sinon.stub(JSDOM, 'fromURL');
    promise = stubedJDOM.returnsPromise();
  });

  afterEach(() => {
    stubedJDOM.restore();
  });

  it('should have return an exception if the url is not passed', () => {
    const dom = getDomFromURL();
    expect(dom).to.have.an({});
  });
});

