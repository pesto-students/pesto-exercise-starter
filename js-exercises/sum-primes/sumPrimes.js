function sumPrimes(num) {
  let sum = 0;
  let isPrime;
  for (let i = 2; i <= num; i += 1) {
    isPrime = 1;
    for (let j = 2; j <= i / 2; j += 1) {
      if (i % j === 0) {
        isPrime = 0;
        break;
      }
    }
    if (isPrime === 1) sum += i;
  }
  return sum;
}

export {
  sumPrimes,
};
