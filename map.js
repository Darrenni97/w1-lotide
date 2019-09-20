const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !=== ${expected}`);
  }
}


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ['hi', 'bye'];
const words2 = ['one', 'two', 'three', 'four'];

const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ['h', 'b']);
assertArraysEqual(results3, ['o', 't', 't', 'f']);
