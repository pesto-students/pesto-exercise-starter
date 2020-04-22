function sumAll(arg) {
  let upperBound = Math.max(...arg);
  let lowerBound = Math.min(...arg);
  let sum = 0;
  for (let i = lowerBound; i <= upperBound; i++) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};