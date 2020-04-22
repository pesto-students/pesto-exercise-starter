const fabonacci = (n) => {
  let a = 0
  let b = 1
  let c = a + b
  let i = 1
  while (i <= n) {
    c = a + b
    a = b
    b = c
    i++
  }
  return c;
}

function sumFibs(num) {
  let sum = 1
  for (let i = 1; i <= num; i++) {
    if (fabonacci(i) > num) return sum
    if (fabonacci(i) <= num) {
      if (!Number.isInteger(fabonacci(i) / 2)) {
        sum += fabonacci(i)
      }
    }
  }

  return sum
}

export {
  sumFibs,
};
