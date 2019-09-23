const assert = require('chai').assert;
const head   = require('../head');
// assertEqual(head([4,5,6]), 4);
// assertEqual(head(["hello", "lighthouse", "labs"],"hello"));

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['4']", () => {
    assert.strictEqual(head(['5']), '4'); 
  });
});