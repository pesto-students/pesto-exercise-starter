function diffArray(array, compareToArray) {
  if (array === undefined || array.length === 0) {
    if (compareToArray === undefined || compareToArray.length === 0) {
      return [];
    }
    return compareToArray;
  }
  if (compareToArray === undefined || compareToArray.length === 0) {
    if (array === undefined || array.length === 0) {
      return [];
    }
    return array;
  }
  const firstDifferenceArray = compareToArray.filter((item) => !array.includes(item));
  const secondDifferenceArray = array.filter((item) => !compareToArray.includes(item));
  return firstDifferenceArray.concat(secondDifferenceArray);
}
export {
  diffArray,
};
