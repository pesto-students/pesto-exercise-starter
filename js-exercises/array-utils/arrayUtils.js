function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

function map(array, callback) {
  const resultArray = [];
  for (let i = 0; i < array.length; i += 1) {
    resultArray.push(callback(array[i]));
  }
  return resultArray;
}

function filter(array, callback) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) filteredArray.push(array[i]);
  }
  return filteredArray;
}

function reduce(array, callback, initialVal) {
  let acc = initialVal;
  for (let i = 0; i < array.length; i += 1) {
    acc = callback(acc, array[i]);
  }
  return acc;
}

export {
  forEach,
  map,
  filter,
  reduce,
};
