function sumPrimes(num) {
  let sum=2
  if(num==1){
    return 0;
  }else if(num==2){
    return 2
  }
  for (var i=3;i<=num;i++){
    let boo=true
    for (var j=2;j<i;j++){
      if(i%j==0){
        boo=false
        break;
      }
    }
    if(boo==true){
      sum=sum+i
    }
  }
return sum;
}

export {
  sumPrimes,
};
