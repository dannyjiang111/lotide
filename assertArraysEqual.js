const eqArrays = function(actual, eactualpected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== eactualpected[i]) {
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
