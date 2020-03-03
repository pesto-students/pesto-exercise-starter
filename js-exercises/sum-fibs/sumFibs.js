function sumFibs(num) {
  let fib0 = 1, fib1 = 1, sum = 1;

  if (num == 0)
    return 0;

  while (fib1 < num) {
    if (isOdd(fib1))
      sum += fib1;

    let temp = fib1;
    fib1 += fib0;
    fib0 = temp;
  }

  return sum;
}

function isOdd(num) {
  return (num % 2 != 0 ? true:false);
}

export {
  sumFibs,
};
