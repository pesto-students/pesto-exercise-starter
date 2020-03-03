const isPrime = (num) => {
  if (num === 1) return false
  if (num === 2) return true
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) {
      return false
    }
  }
  return true
}
function sumPrimes(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sum += i
    }
  }
  return sum
}

export {
  sumPrimes,
};
