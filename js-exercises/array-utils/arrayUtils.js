function forEach(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i], i, array);
  }
}

function map(array, callBack) {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callBack(array[i], i, array));
  }
  return mappedArray;
}

function filter(array, callBack) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

function reduce(array, callBack, typeOfAccumulator = 0) {
  let tempAccumulator = typeOfAccumulator;
  for (let i = 0; i < array.length; i++) {
    tempAccumulator = callBack(tempAccumulator, array[i], i, array);
    console.log("hi, ", tempAccumulator);
  }
  return tempAccumulator;
}

export { forEach, map, filter, reduce };
