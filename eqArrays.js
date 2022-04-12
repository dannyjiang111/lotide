const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    let isEqual = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        isEqual = false;
      }
    }
    if (isEqual) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = eqArrays;