function isPrimeOrNot(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 1) {
    if (isPrimeOrNot(i)) {
      sum += i;
    }
  }
  // console.log(sum);
  return sum;
}

export {
  sumPrimes,
};
