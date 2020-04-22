const cache = {};
function fib(n) {
  if (n in cache) {
    return cache[n];
  }
  if (n < 2) {
    cache[n] = n;
    return n;
  }
  cache[n] = fib(n - 1) + fib(n - 2);
  return cache[n];
}

function isOdd(n, number) {
  if (n % 2 === 0) return false;
  return true;
}

function sumFibs(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    const newFib = fib(i);

    if (isOdd(newFib) === true) {
      if (newFib <= n) {
        sum += newFib;
      }
    }
  }

  return sum;
}

export { sumFibs };
