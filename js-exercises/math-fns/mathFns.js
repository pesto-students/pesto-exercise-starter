
// Don't change the export values.
// You can use the function in the Math module

import { sqrt,pow,round } from 'mathjs'

var sqrts = function(number){
  return Math.sqrt(number);
}

var power = function(number1,number2){
  var result =1 ;
  for(let i=1;i<=number2;i++){
     result = number1 * result;
  }
  return result;
  //Math.pow(number1,number2);
}

var rounds = function(number){
  return Math.round(number);
}

export {
  sqrts,
  power,
  rounds,
};
