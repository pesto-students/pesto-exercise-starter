function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }

  return sum;
}

function isPrime(n) {
  if (n == 2) {
    return true;
  }
  else {
    for (let x = 2; x < n; x++) {
      if (n % x == 0) {
        return false;
      }
    }
    return true;
  }
}

export {
  sumPrimes,
};
