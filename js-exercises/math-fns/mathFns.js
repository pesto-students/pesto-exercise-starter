
// Don't change the export values.
// You can use the function in the Math module
const power = function (number, power) {
  if (typeof number !== 'number' || typeof power !== 'number') return;

  let poweredValue = 1;
  for (let index = 1; index <= power; index++) {
    poweredValue *= number
  }
  return poweredValue
}
const sqrt=function(){
  
}
export {
  sqrt,
  power,
  round,
};
