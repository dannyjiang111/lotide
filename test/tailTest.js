const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe("#tail", () => {
  it("returns tail of an array", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});