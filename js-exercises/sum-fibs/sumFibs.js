//optimised algorithm considering input number can be very large
function sumFibs(num) {
var num1 = 1; 
var num2 = 1; 
var num3 = num;
 if(num==1){
   return 1
 }else if(num==2){
   return 2
 }
 //sum is equal to two because if the number is greater than two the sum of first two numbers is 2
 let sum=2
  for (var i=2; i<=num; i++){
      num3 = (num1 + num2);
      num1 = num2;
      num2 = num3;
      if(num3%2!=0 && num3<=num){
        sum=sum+num3;
      }
  }
  return sum;
}

export {
  sumFibs,
};
