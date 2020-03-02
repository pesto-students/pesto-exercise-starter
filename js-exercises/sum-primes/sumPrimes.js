/* eslint-disable no-plusplus */
function sumPrimes(num) {
  const arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
  const allPrimes = arr.filter(n => {
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0) return false;
      m--;
    }
    return true;
  });
  return allPrimes.reduce((a, b) => a + b);
}

export {
  sumPrimes,
};
