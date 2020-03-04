
// Don't change the export values.
// You can use the function in the Math module

import {
   pow, round, sqrt
} from 'mathjs'

var sqrtFunction  = function(number){
	return sqrt(number);
}

var roundFunction  = function(number){
	return round(number);
}

var powerFunction  = function(number1, number2){
	return pow(number1,number2);
}

var sqrts  = sqrtFunction;
var rounds = roundFunction;
var power = powerFunction;

export {
  sqrts,
  power,
  rounds,
};
