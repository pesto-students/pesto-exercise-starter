function sumAll(num) {
  let sum=0;
  if(num[0]<num[1]){
    for(var i=num[0];i<=num[1];i++){
      sum=sum+i
    }
  }else if(num[0]>num[1]){
    for(var i=num[1];i<=num[0];i++){
      sum=sum+i
    }
  }else{
    sum=sum+num[0]+num[1]
  }
  return sum;
}

export {
  sumAll,
};
