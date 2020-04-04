const compareNumericArray = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  if (array1.find((element) => array2.includes(element)) !== undefined) {
    return true;
  }

  return false;
};

export { compareNumericArray };
