function addBigIntegers(intString) {
  let splitedString = intString.split("\n");
  let sum = 0;
  for (let i = 0; i < splitedString.length; i++) {
    sum += Number(splitedString[i]);
  }
  return sum;
}

export { addBigIntegers };
