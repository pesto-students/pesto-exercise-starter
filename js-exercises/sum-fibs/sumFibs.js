function sumFibs(num) {
  let temp;
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;
  for (let i = 1; fib2 <= num; i += 1) {
    if (i === 1) {
      sum += fib1;
    } else if (i === 2) {
      sum += fib2;
    } else {
      temp = fib2;
      fib2 += fib1;
      fib1 = temp;
      if (fib2 > num) {
        break;
      }
      if (fib2 % 2 !== 0) {
        sum += fib2;
      }
    }
  }
  return sum;
}

export {
  sumFibs,
};
