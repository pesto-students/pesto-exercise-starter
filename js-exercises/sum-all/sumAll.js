function sumAll(...args) {

  let [lowerBound, upperBound] = args[0];

  if (lowerBound > upperBound) {
    let swap = lowerBound;
    lowerBound = upperBound;
    upperBound = swap;
  }
  console.log(lowerBound, upperBound);
  let sum = 0;
  for(let num = lowerBound; num <= upperBound; num++ ) {
    sum += num;
  }
  return sum;
}

export {
  sumAll,
};
