// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !=== ${expected}`);
  }
};


const countLetters = function(word) {
  const results = {};

  const trimmed = word.replace(/\s/g,''); //gets rid of all white space

  for (let letters of trimmed) {
    letters = letters.toLowerCase();
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }

  return results;
};

const result1 = countLetters("lighthouse in the house")
assertEqual(result1['l'], 1); 