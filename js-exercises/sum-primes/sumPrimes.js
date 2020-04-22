function sumPrimes(n) {
  let result = (n>=2) ? 2 : 0;
  for (let i = 3; i <= n; i++) {
    let isPrime = false;
    for (let j = 2; j < i; j++) {
       if (i%j===0) {
          isPrime = true;
       }
    }
    if (isPrime === false) {
       result += i;
    }
 }
 return result;
}

export {
  sumPrimes,
};
