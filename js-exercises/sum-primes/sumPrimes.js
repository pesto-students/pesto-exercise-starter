function isPrime(n) {
  if (n < 2) return false;
  const q = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= q; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}


function sumPrimes(number) {
  let sum = 0;
  for (let index = 1; index <= number; index += 1) {
    if (isPrime(index)) sum += index;
  }
  return sum;
}
export {
  sumPrimes,
};
