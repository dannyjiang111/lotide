const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST FUNCTIONS
assertArraysEqual((middle([1, 2])))
assertArraysEqual((middle([1, 2, 3, 4, 5])))
assertArraysEqual((middle([1, 2, 3, 4])))