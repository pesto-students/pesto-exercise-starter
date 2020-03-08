function getSmallestOrLargestValue(operand = '<', firstValue, secondValue) {
  switch (operand) {
    case '<':
      return firstValue < secondValue ? firstValue : secondValue;
    case '>':
      return secondValue > firstValue ? secondValue : firstValue;
    default:
      return null;
  }
}

function sumAll(requestArray = []) {
  if (
    !requestArray
    || typeof requestArray !== 'object'
    || requestArray.length === 0
  ) {
    return new Error(`Expected two digit of array like [1,4] but received ${requestArray}`);
  }
  const firstItem = requestArray[0];
  const secondItem = requestArray[1];

  const lowerBound = getSmallestOrLargestValue('<', firstItem, secondItem);
  const upperBound = getSmallestOrLargestValue('>', firstItem, secondItem);

  let sum = 0;

  for (let value = upperBound; value >= lowerBound; value -= 1) {
    sum += value;
  }

  return sum;
}

export { sumAll };
