function sumPrimes(N) {
  let primeList = [];
  let arrSum = 0;
  function isPrime(X) {
    for (let iter = 2; iter < X; iter += 1) {
      if (X % iter === 0) {
        return false;
      }
    }
    return true;
  }

  for (let jter = 2; jter <= N; jter += 1) {
    if (isPrime(jter)) {
      primeList.push(jter);
    }
  }
  arrSum = primeList.reduce((a, b) => a + b, 0);
  return arrSum;
}

export {
  sumPrimes,
};
