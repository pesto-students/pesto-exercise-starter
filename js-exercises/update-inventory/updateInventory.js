function updateInventory(arr1, arr2) {
  var index;
  var getProductIndex = function(name) {
    for (var i = 0; i < this.length; i++) {
      if (this[i][1] === name) {
        return i;
      }
    }
    return undefined;
  };

  for (var i = 0; i < arr2.length; i++) {
    index = getProductIndex.call(arr1, arr2[i][1]);

    if (index === undefined) {
      arr1.push(arr2[i]);
    } else {
      arr1[index][0] += arr2[i][0];
    }
  }

  arr1.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });

  return arr1;
}
export { updateInventory };
