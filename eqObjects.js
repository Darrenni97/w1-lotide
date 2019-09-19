// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !=== ${expected}`);
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //compares object1 to object 2
  for (let i in object1) {
    if (object1.hasOwnProperty(i)){
      if (!object2.hasOwnProperty(i)) {
        return false;
      } if (object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  //compares object2 to object 1 (helps if object 2 is longer than object 1)
  for (let i in object2) {
    if (object2.hasOwnProperty(i)){
      if (!object1.hasOwnProperty(i)) {
        return false;
      } if (object2[i] !== object1[i]) {
        return false;
      }
    }
  }
  return true;
};

//first test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//testing for arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false