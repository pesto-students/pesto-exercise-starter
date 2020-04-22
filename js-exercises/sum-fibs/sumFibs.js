function sumFibs(num) {
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  let nextFib = 1;

  while (num2 <= num) {
    if (num2 % 2 !== 0) {
      sum += num2;
    }
    nextFib = num1 + num2;
    num1 = num2;
    num2 = nextFib;
  }
  return sum;
}

export { sumFibs };
