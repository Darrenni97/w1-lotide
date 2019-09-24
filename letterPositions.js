const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]; 
    if (results[letter]) {
      results[letter].push(i);//pushes letter position to array
    } else {
      results[letter] = [i] //adds letter object and position if one wasnt already there
    }
  }
  delete results[' ']; //gets rid of white space objects
  // logic to update results here
  return results;
}; 


//Test assertion
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

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;