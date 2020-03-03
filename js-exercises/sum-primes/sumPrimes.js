function sumPrimes(N) {
  const sumObj = { sumOfPrimes: 0 };
  if (N < 2) return 0;
  if (N === 2) return 2;
  if (N > 2) {
    sumObj.sumOfPrimes = 2;
    for (let i = 3; i <= N; i += 2) {
      for (let j = 1; j <= Math.floor(i / 2); j += 1) {
        if (i % j === 0 && j !== 1) break;
        if (j === Math.floor(i / 2)) sumObj.sumOfPrimes += i;
      }
    }
    return sumObj.sumOfPrimes;
  }
  return sumObj.sumOfPrimes;
}

export { sumPrimes };
