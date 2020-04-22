function sumAll(twoNums) {
  let [lowerBound, upperBound] = twoNums;
  let sum = 0;
  if (lowerBound > upperBound) {
    [upperBound, lowerBound] = twoNums;
  }
  for (let i = lowerBound; i <= upperBound; i++) {
    sum += i;
  }
  return sum;
}

export { sumAll };
