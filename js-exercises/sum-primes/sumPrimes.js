function sumPrimes(n) {
  let sum = 0;
  const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  for (let i = n; i > 0; i--) {
    if (isPrime(i)) {
        sum += i;
    }
  }

  return sum;
  
}


export {
  sumPrimes,
};
