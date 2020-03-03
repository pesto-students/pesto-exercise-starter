function sumFibs(N) {
  const fibArray = [0, 1];
  const sumObj = { oddFibsSum: 0 };
  if (N < 2) return 0;
  if (N === 2) return 1;
  if (N > 2) {
    sumObj.oddFibsSum = 1;
    for (let i = 2; fibArray[i - 1] < N; i += 1) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
      if (fibArray[i] % 2 !== 0 && fibArray[i] <= N) {
        sumObj.oddFibsSum += fibArray[i];
      }
    }
    return sumObj.oddFibsSum;
  }
  return sumObj.oddFibsSum;
}

export { sumFibs };
