/* eslint-disable no-plusplus */
function sumFibs(n) {
  if (n < 1) return;
  const fibonacciSeries = [];
  let a = 0;
  let b = 1;
  for (let i = 1; i <= n; i++) {
    fibonacciSeries.push(b);
    const next = a + b;
    a = b;
    b = next;
  }
  const sum = fibonacciSeries.filter(ele => (ele < n && ele % 2 !== 0))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // eslint-disable-next-line consistent-return
  return sum;
}

export {
  sumFibs,
};
