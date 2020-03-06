/* global BigInt */

function addBigIntegers(intString) {
  const intArray = intString.split('\n');
  return intArray.reduce((accumulator, currentValue) => BigInt(accumulator) + BigInt(currentValue), 0).toLocaleString('fullwide', { useGrouping: false });
}

export { addBigIntegers };
