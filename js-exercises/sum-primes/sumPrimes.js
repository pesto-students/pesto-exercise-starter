function sumPrimes(n) {
  function isPrime(num) {
    for (let j = 2; j <= Math.floor(num / 2); j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true
  }
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

export {
  sumPrimes,
};