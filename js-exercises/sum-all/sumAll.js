function sumAll() {
  let [min, max] = arguments[0]
  let sum = 0;

  if (min > max) {
    // swap
    sum = max
    max = min
    min = sum
  }

  sum = 0

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1,4])

export {
  sumAll,
};
