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

module.exports = middle;