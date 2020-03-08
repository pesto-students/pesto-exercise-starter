
function lastIndexOf(searchKey, inputArray) {
  // return inputArray.lastIndexOf(searchKey);
  for (let i = inputArray.length; i > 0; --i) {
    if (inputArray[i] === searchKey) {
      return i;
    }
  }
  return -1;
}

export {
  lastIndexOf,
};
