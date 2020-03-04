
// Don't change the export values.
// You can use the function in the Math module
function power(number, power) {
  if (typeof number !== 'number' || typeof power !== 'number') return;

  let poweredValue = 1;
  for (let index = 1; index <= power; index++) {
    poweredValue *= number
  }
  return poweredValue
}
function round(inputValue) {
  let integerValue = parseInt(inputValue)

  let decimalValue = inputValue - integerValue

  if (decimalValue <= 0.5) return integerValue
  return integerValue + 1
}
function sqrt(number) {
  for (let index = 0; index * index <= number; index++) {
    if (index * index === number) return index;
  }
  return number;
}
export {
  sqrt,
  power,
  round,
};
