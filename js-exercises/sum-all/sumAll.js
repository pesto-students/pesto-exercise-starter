function sumAll(arr) {
  let [min, max] = arr
  let sum = 0

  if (min > max) {
    // swap
    sum = max
    max = min
    min = sum
  }

  sum = 0

  for (let i = min; i <= max; i++) {
    sum += i
  }

  return sum;
}

export {
  sumAll,
};
