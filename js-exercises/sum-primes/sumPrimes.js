/* eslint-disable no-plusplus */
function sumPrimes(n) {
  const primeNumbers = [];
  for (let i = 2; i <= n; i++) {
    // eslint-disable-next-line no-use-before-define
    if (isPrime(i)) primeNumbers.push(i);
  }
  return primeNumbers.reduce((acc, currentValue) => acc + currentValue, 0);
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export {
  sumPrimes,
};
