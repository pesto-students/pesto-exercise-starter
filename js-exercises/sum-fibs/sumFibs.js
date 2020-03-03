const sumOddfib = (n) => {
  if (typeof n !== 'number') {
    return 0;
  }
  let sum = 1;
  const arr = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    const num = arr[i - 2] + arr[i - 1];
    if ((num % 2) && num <= n) {
      sum += num;
    }
    arr.push(num);
  }
  return sum;
};

function sumFibs(n) {
  return sumOddfib(n);
}

export {
  sumFibs,
};
