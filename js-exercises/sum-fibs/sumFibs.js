function sumFibs(n) {
  let i =0;
  let sum = 0;
  while(fib(i)< n) {
    if(fib(i)%2!=0) {
      sum = sum+fib(i);
    }
    i++;
  }
  return sum;
}

const fib = n => n <= 1 ? n : fib(n-1) + fib(n-2); 

export {
  sumFibs,
};
