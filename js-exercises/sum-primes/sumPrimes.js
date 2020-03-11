function sumPrimes(num) {
  let sum=0
  if(num<=1){
    return 0;
  }
  for (var i=2;i<=num;i++){
    let prime=true
    for (var j=2;j<i;j++){
      if(i%j==0){
        prime=false
        break;
      }
    }
    if(prime==true){
      sum=sum+i
    }
  }
return sum;
}

export {
  sumPrimes,
};
