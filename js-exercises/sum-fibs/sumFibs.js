function sumFibs(n) {
  for(let i=0; i<=n;i++) {
    console.log(fib(n)%2===0 ? null : fib(n));
  }
}

const fib = n => n <= 1 ? n : fib(n-1) + fib(n-2); 

export {
  sumFibs,
};
