  
const eqArray = require('./eqArray');

const assertArrayEqual = function(actual, expected) {
  if (eqArray(actual, expected)) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !=== ${expected}`);
  }
 }

module.exports = assertArrayEqual;