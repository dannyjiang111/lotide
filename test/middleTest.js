const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


describe('#middle', () => {
  it("return the two center elements for an even numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  })
  it("return the center element from a odd numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });
})