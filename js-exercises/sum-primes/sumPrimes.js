function sumPrimes(number) {
   function isPrime(val){
   for(let i=2; i < val; i++){
        if(val % i === 0){
          return false;
        }}
      return true;
    }

  let sum = [];
  for(let i=2;i<= number;i++){
   		 if(isPrime(i) === true){
           sum.push(i);
         }
    }

return sum.reduce((a, b) => a + b, 0);
}

export {
  sumPrimes,
};
