/* eslint-disable no-cond-assign */
function sumFibs(num) {
  if (num === 0 || num === 1) return 1;
  const arr = [1, 1];
  let next = 0;
  while ((next = arr[0] + arr[1]) <= num) {
    arr.unshift(next);
  }
  return arr.filter(x => x % 2 !== 0).reduce((a, b) => a + b);
}

export {
  sumFibs,
};
