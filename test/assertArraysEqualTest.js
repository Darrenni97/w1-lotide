const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')

describe('#assertArraysEqual', () => {
  it('returns true [1, 2, 3] for [1, 2, 3]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it('returns false [1, 2, 3] for [3, 2, 1]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  });

});
// assertArraysEqual([1, 2, 3], [1, 2, 3]); 
// assertArraysEqual([1, 2, 3], [3, 2, 1])