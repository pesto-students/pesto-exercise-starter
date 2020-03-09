function map(array, cb) {
  const arrayWithMap = [];
  for (let i = 0; i < array.length; i++) {
    arrayWithMap.push(cb(array[i]));
  }
  return arrayWithMap;
}

function filter(array, cb) {
  const arrayWithFilter = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      arrayWithFilter.push(array[i]);
    }
  }
  return arrayWithFilter;
}

function reduce(array, cb, initialValue) {
  for (let i = 0; i < array.length; i++) {
    initialValue = cb(initialValue, array[i]);
  }
  return initialValue;
}

function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}
export { forEach, map, filter, reduce };
