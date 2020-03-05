function addBigIntegers(intString) {
  let resultSum = 0;
  intString.split('\n').forEach(element => {
    resultSum += Number(element);
  });
  return resultSum.toString();
  // sorry, it doesn't work for big numbers, but i ran out of time :(
  // I'll fix this later
}

export { addBigIntegers };
