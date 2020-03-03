
const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

function sumPrimes(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 1) {
    const isPrimeNo = isPrime(i);
    if (isPrimeNo) {
      sum += i;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
