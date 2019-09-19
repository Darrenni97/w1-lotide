// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !=== ${expected}`);
  }
};


//array test
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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  const object1Length = Object.keys(object1).length;
  const object2Length = Object.keys(object2).length;
  //checks length of both objects
  if (object1Length != object2Length) {
    return false;
  }

  
  for (let i in object1) {
    if (Array.isArray(object1[i])) {
      
      if (!eqArrays(object1[i], object2[i])) {
        // if it fails then return false
        return false;
      }
      if (!Array.isArray(object1[i]) && !Array.isArray(object2[i])) {
        
        //compares object1 to object 2
        if (!object2.hasOwnProperty(i)) { 
          // if object2 doesnt have object1[i] key return false
          return false;
        }
        if (object1[i] !== object2[i]) {
          //if object[1] is not equal to the value of object[2] return false
          return false;
        }
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