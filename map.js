const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  } 
  return true;
};

const assertArraysEqual = function(x,y) {
  if (eqArrays(x,y)) {
    console.log(`✅  Assertion passed: ${x} === ${y}`);
  } else {
    console.log(`🛑  Assertion failed: ${x} !== ${y}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};
