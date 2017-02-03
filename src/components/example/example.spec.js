import chai from 'chai';
import { example } from './example.js';

chai.expect();
const expect = chai.expect;

describe('Example', function () {
  it('should return Hello, World!', () => {
    expect(example('World!')).to.equal('Hello, World!');
  });
});
