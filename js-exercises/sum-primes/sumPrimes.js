function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  if (num > 1) return num;
  return false;
}

function sumPrimes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    const p = prime(i);
    sum = p ? sum + p : sum;
  }

  return sum;
}

export { sumPrimes };
