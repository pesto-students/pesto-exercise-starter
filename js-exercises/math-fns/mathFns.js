// Don't change the export values.
// You can use the function in the Math module
function power(base, power) {
  if (typeof base !== "number" || typeof power !== "number") {
    return;
  }
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= base;
  }
  return result;
}

function round(number) {
  if (typeof number !== "number") {
    return;
  }
  const intNumber = parseInt(number);
  const decimalValues = number - intNumber;
  return decimalValues > 0.5 ? intNumber + 1 : intNumber;
}

function sqrt(number) {
  if (typeof number !== "number") {
    return;
  }
  let middleNumber = parseInt(number / 2);
  let upperbound = number;
  let lowerbound = 0;
  while (middleNumber * middleNumber !== number) {
    if (middleNumber * middleNumber > number) {
      upperbound = middleNumber;
      middleNumber = parseInt((lowerbound + upperbound) / 2);
    }
    if (middleNumber * middleNumber < number) {
      lowerbound = middleNumber;
      middleNumber = parseInt((lowerbound + upperbound) / 2);
    }
    if (upperbound - 1 === lowerbound) {
      console.log("The squareroot does not exist");
      return null;
    }
  }
  return middleNumber;
}
export { sqrt, power, round };
