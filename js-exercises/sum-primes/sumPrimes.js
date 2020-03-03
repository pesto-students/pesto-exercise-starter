
function isPrime(x){
  if(x==1)
  return true;
  for (let i = 2; i <= Math.sqrt(x); i++)
  {
      if(x%i==0){
          return false;
      }
  }
  return true;
}
function sumPrimes(x) {

  var sum=0;
      for(let i=2; i<=x;i++)
      if(isPrime(i)){
      sum+=i;
    }
    return sum;
}

export {
  sumPrimes,
};
