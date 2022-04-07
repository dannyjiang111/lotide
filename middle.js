const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  } 
  return true;
};

const assertArraysEqual = function(actual,expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let mid = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return []
  } else if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else {
    return [array[mid]]
 }
};

// TEST FUNCTIONS
console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4]))