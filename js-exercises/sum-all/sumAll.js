function sumAll(arr) {
  let low = (arr[0] < arr[1] ? arr[0]:arr[1]);
  let high = (arr[0] > arr[1] ? arr[0]:arr[1]);

  return sumRange(low, high);
}

function sumRange(low, high) {
  if (low == high)
    return low;
  return low + sumRange(low+1, high);
}

export {
  sumAll,
};
