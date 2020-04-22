function sumAll(num) {
  let sum=0;
  //check if number at 0 index is greater than number at index 1
  if(num[0]<num[1]){
    for(var i=num[0];i<=num[1];i++){
      sum=sum+i
    }
  //if the first condition is not true check if the number at index 1 is greater than number at index 0
  }else if(num[0]>num[1]){
    for(var i=num[1];i<=num[0];i++){
      sum=sum+i
    }
  //if both conditions are false,it means both the numbers are equal
  }else{
    sum=sum+num[0]+num[1]
  }
  return sum;
}
export {
  sumAll,
};
