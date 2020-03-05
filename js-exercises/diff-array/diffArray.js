function diffArray(firstArray, secondArray) {

  let firstArrayUniqueElements = firstArray.filter((element) => {
    return secondArray.indexOf(element) === -1
  });
  let secondArrayUniqueElements = secondArray.filter((element) => {
    return firstArray.indexOf(element) === -1
  });
  return firstArrayUniqueElements.concat(secondArrayUniqueElements);
}

export {
  diffArray,
};