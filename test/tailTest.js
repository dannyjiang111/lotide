const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);