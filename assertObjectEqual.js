const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅Assertion Passed:${inspect(object1)} === ${inspect(object2)}`)
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !=== ${inspect(object2)}`);
  }
};
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);