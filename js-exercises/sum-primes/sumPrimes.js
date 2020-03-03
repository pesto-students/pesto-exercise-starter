function isNumberPrime(value) {
  for (let i = 2; i <= value / 2; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}
function sumPrimes(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    if (isNumberPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
export {
  sumPrimes,
};
