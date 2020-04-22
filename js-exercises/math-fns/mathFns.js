
// Don't change the export values.
// You can use the function in the Math module

function sqrt(num){
  return Math.sqrt(num)
}


function power(num,pow){
let result=1
 for(var i=1;i<=pow;i++){
   result=result*num
 }
 return result;
}

function round(num){
  return Math.floor(num)
}

export {
  sqrt,
  power,
  round,
};
