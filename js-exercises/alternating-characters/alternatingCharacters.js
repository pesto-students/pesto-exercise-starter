function alternatingCharacters(arr) {
  var count = 0;
  arr.reduce(function(previous, current) {
    if (previous === current) {
      count++;
    }
    return current;
  }, "");
  return count;
}

export { alternatingCharacters };
