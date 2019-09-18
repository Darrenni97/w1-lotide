// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed:[${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !=== [${expected}]`);
  }
};

const middle = function(array) {
  let output = [];
  if (array.length <= 2) {
    return output;
  } 

  let middle = Math.floor(array.length/2)
  if (array.length % 2 === 0) {
    output.push(array[middle - 1]);
    output.push(array[middle]);
  } else { 
    output.push(array[middle])
  }

  return output;
};

// TEST CODE
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 4]), [2]);
assertArraysEqual(middle([1, 2,]), []);
assertArraysEqual(middle([1]), []);