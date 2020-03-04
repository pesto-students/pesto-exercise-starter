function forEach(array, callBack) {
  if (typeof callBack !== "function") {
    return;
  }

  for (let i = 0; i < array.length; i++) {
    callBack(array[i], i, array);
  }
}

function map(array, callBack) {
  if (typeof callBack !== "function") {
    return;
  }
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callBack(array[i], i, array));
  }
  return mappedArray;
}

function filter(array, callBack) {
  if (typeof callBack !== "function") {
    return;
  }
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

function reduce(array, callBack, initialValue) {
  if (typeof callBack !== "function") {
    return;
  }
  let tempAccumulator = initialValue ? initialValue : array[0];
  for (let i = 0; i < array.length; i++) {
    tempAccumulator = callBack(tempAccumulator, array[i], i, array);
    console.log("hi, ", tempAccumulator);
  }
  return tempAccumulator;
}

export { forEach, map, filter, reduce };
