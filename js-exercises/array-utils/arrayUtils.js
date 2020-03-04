function forEach(array, callback) {
  if (typeof callback != 'function') return;
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array)
  }

}
function map(array, callback) {
  if (typeof callback != 'function') return;
  let resultArr = []
  for (let index = 0; index < array.length; index++) {
    resultArr.push(callback(array[index], index, array))
  }
  return resultArr
}
function filter(array, callback) {
  let filteredArr = [];
  for (let index = 0; index < array.length; index++) {

    if (callback(array[index]), index, array)
      filteredArr.push(array[index])

  }
  return filteredArr
}
function reduce(array, callBack, initialAccumulator) {
  let accumulator = initialAccumulator ? initialAccumulator : array[0];
  let startIndex = initialAccumulator ? 0 : 1;
  for (startIndex; startIndex < array.length; startIndex++) {
    accumulator = callBack(accumulator, array[startIndex], startIndex, array);
  }
  return accumulator;
}
export {
  forEach,
  map,
  filter,
  reduce,
}