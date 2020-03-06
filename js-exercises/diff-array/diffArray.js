const getDifferenceOfArgument1FromArgument2 = (arr1, arr2) => {
  return arr1.filter(x => arr2.indexOf(x) === -1);
};
function diffArray(array1, array2) {
  const difference1 = getDifferenceOfArgument1FromArgument2(array2, array1);
  const difference2 = getDifferenceOfArgument1FromArgument2(array1, array2);
  const symmetricDifferenceArray = difference2.concat(difference1);
  return symmetricDifferenceArray;
}

export {
  diffArray,
};
