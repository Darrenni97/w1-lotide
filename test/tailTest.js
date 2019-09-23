const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it('should return true when given ["Yo Yo", "Lighthouse", "Labs"], ', () => {
    assert.strictEqual(tail(words).length, 2);
  })
});

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!