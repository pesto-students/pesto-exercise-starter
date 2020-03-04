let forEach = (array, functionCallback) => {
  for (var index = 0; index < array.length; index++) {
    functionCallback(index, array[index]);
  }
};

let map = (array, functionCallback) => {
  let mappedArray = [];
  for (let index = 0; index < array.length; index++) {
    mappedArray[index] = functionCallback(index, array[index]);
  }
  return mappedArray;
};

let filter = (array, functionCallback) => {
  let filteredArray = [];
  for (let index = 0; index < array.length; index++) {
    if (functionCallback(array[index])) {
      filteredArray.push(array[index]);
    }
  }
  return filteredArray;
};

let reduce = (array, functionCallback, initialValue) => {
  let accumulator = initialValue === undefined ? undefined : initialValue;

  for (let index = 0; index < array.length; index++) {
    if (accumulator !== undefined) {
      accumulator = functionCallback(accumulator, array[index], index);
    } else {
      accumulator = array[index];
    }
  }

  return accumulator;
};
export { forEach, map, filter, reduce };
