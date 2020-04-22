function sumFibs(num) {
  var a = 1; 
 var b = 1; 
 var c = num;
 if(num==1){
   return 1
 }else if(num==2){
   return 2
 }
 let sum=2
  for (var i=2; i<=num; i++){
      c = (a + b);
      a = b;
      b = c;
      if(c%2!=0 && c<=num){
        sum=sum+c;
      }
  }
  return sum;
}

export {
  sumFibs,
};
