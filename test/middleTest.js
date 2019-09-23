const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;

describe('#middle', () => {
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
  });

  it('returns [2] for [1, 2, 4]', () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 4]), [2]));
  });

  it('returns [] for [1, 2]', () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2,]), []));
  });

  it('returns [] for [1]', () => {
    assert.strictEqual(assertArraysEqual(middle([1]), []));
  });

});

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 4]), [2]);
assertArraysEqual(middle([1, 2,]), []);
assertArraysEqual(middle([1]), []);