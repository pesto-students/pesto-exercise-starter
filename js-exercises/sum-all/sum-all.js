function sumAll(arr) {
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  while (min != max) {
    sum = sum + min;
    min++;
  }
  return sum+max;
}

module.exports = sumAll;
