function isPrime(number) {
  for (let j = 2; j <= Math.sqrt(number); j++) {
    if (number % j === 0) return false;
  }
  return true
}

function sumPrimes(upperLimit) {
  let sum = 0;
  for (let i = 2; i <= upperLimit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

export {
  sumPrimes,
};