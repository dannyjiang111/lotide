const takeUntil = function(array, callback) {
  array.forEach(function(i, index) {
    if (callback(i)) {
      array = array.slice(0, index);
    }
  });
  return array;
};
