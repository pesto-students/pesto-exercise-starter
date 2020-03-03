function sumAll(arr) {
  var sum = 0;
  arr[0] > arr[1] && arr.reverse();
  for (i = arr[0]; i <= arr[1]; sum += i++);
  return sum;
}

export { sumAll };
