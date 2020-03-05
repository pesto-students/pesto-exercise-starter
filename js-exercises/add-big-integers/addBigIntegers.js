function addTwoBigIntegers(stringedNumber1, stringedNumber2) {
  let sum = [];
  let stringedNumber1Length = stringedNumber1.length - 1;
  let stringedNumber2Length = stringedNumber2.length - 1;
  let carry = 0;
  while (stringedNumber1Length >= 0 || stringedNumber2Length >= 0) {
    let parsedValue1 = parseInt(stringedNumber1[stringedNumber1Length], 10) || 0;
    let parsedValue2 = parseInt(stringedNumber2[stringedNumber2Length], 10) || 0;
    let result = parsedValue1 + parsedValue2 + carry;
    carry = Math.floor(result / 10);
    result = result % 10;
    sum.unshift(result);
    stringedNumber1Length -= 1;
    stringedNumber2Length -= 1;
  }
  if (carry) sum.unshift(carry);
  return sum.join("");
}

function addBigIntegers(intString) {
  const integerStringArray = intString.split("\n");
  const sum = integerStringArray.reduce(addTwoBigIntegers);
  return sum;
}


export {
  addBigIntegers
};