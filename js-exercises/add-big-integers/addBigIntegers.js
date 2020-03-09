const sumNumbers = (numbers, carry = 0, sum = '') => {
  let partialSum = 0;
  numbers = numbers.map(n => n.trim()).filter(n => n !== '');
  // eslint-disable-next-line eqeqeq
  if (numbers.length === 0) return (carry == 0 ? '' : carry.toString()) + sum;
  for (let i = 0; i < numbers.length; i++) {
    partialSum += parseInt(numbers[i].split('').pop(), 10);
    numbers[i] = numbers[i].substr(0, numbers[i].length - 1);
  }
  partialSum += parseInt(carry, 10);
  return sumNumbers(
    numbers,
    parseInt(partialSum === 0 ? 0 : partialSum / 10, 10).toString(),
    (partialSum % 10).toString() + sum
  );
};

function addBigIntegers(inputStr = '') {
  return sumNumbers(inputStr.split('\n'));
}

export { addBigIntegers };
