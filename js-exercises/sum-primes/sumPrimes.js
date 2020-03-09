function isPrime(numToCheck) {
  for (let j = 2; j < numToCheck; j++) {
    if (numToCheck % j === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(inputNum) {
  let sumOfPrimes = 0;
  let i;
  for (i = inputNum; i > 1; i--) {
    if (isPrime(i)) {
      sumOfPrimes += i;
    }
  }
  return sumOfPrimes;
}

export { sumPrimes };
