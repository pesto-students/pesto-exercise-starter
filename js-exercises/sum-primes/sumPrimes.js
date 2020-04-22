function sumPrimes(num) {
  let prime = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }

  function isPrime(num) {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
  let sum = 0;

  for (var k = 0; k < prime.length; k++) {
    sum += prime[k];
  }

  return sum;
}

export { sumPrimes };
