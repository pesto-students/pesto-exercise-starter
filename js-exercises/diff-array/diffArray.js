function diffArray(firstArray, secondArray) {
  const firstUniqueArray = firstArray.reduce((accumulator, element) => {
    if (secondArray.indexOf(element) === -1) {
      return [...accumulator, element];
    }
    return accumulator;
  }, []);

  const secondUniqueArray = secondArray.reduce((accumulator, element) => {
    if (firstArray.indexOf(element) === -1) {
      return [...accumulator, element];
    }
    return accumulator;
  }, []);

  return firstUniqueArray.concat(secondUniqueArray);
}

export {
  diffArray,
};
