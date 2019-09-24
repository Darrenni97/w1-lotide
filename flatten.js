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
    console.log(`✅✅✅Assertion Passed:[${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !=== [${expected}]`);
  }
};

const flatten = function(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){

      for (let j = 0; j < arr[i].length; j++) {
          // console.log('this is j', arr[i][j]);
          newArr.push(arr[i][j]); // has to reference array in array
      }
    } else {
      // console.log('this is i', arr[i]);
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;