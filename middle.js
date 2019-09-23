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
module.exports = middle;