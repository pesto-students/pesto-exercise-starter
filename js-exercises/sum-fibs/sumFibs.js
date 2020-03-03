function sumFibs(num) {
  function fabonacci(n) {
    // if (n === 1) return 1;
    // if (n === 2) return 1;
    let a = 0;
    let b = 1;
    let c;
    let i = 1;
    while (i <= n) {
      c = a + b;
      a = b;
      b = c;
      i++;
    }
    return c;
  }
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    if (fabonacci(i) > num) return sum;
    if (fabonacci(i) <= num) {
      if (!Number.isInteger(fabonacci(i) / 2)) {
        sum = sum + fabonacci(i)
      }
    }
  }
  return sum;
}

export {
  sumFibs,
};