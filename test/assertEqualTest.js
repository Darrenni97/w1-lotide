const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {

  it('returns false because "Lighthouse labs !== "bootcamp"', () => {
    assert.strictEqual(assertEqual("Lighthouse labs","bootcamp"));
  });

  it('returns true because 1 === 1', () => {
    assert.strictEqual(assertEqual(1, 1));
  });

})

// assertEqual("Lighthouse labs","bootcamp");
// assertEqual(1,1);