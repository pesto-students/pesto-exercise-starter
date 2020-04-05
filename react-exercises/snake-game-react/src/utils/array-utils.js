const isFirstNumberGreater = (num1, num2) => {
  return num1 > num2;
};

const isNumberArrayExactCopy = (array1, array2) => {
  let result = false;

  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return result;
  }

  if (array1.length !== array2.length) {
    return result;
  }

  const sortedArray1 = array1.sort(isFirstNumberGreater);
  const sortedArray2 = array2.sort(isFirstNumberGreater);

  result = true;
  for (let index = 0; index < sortedArray1.length; index++) {
    result = sortedArray2[index] === sortedArray1[index];

    if (!result) {
      break;
    }
  }

  return result;
};

export { isNumberArrayExactCopy };
