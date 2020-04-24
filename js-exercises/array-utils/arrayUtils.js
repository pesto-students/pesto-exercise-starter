
function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
}

function map(array, callback) {
  const returnArray = [];
  for (let i = 0; i < array.length; i += 1) {
    returnArray.push(callback(array[i], i, array));
  }
  return returnArray;
}

function filter(array, callback, context) {
  const returnArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback.call(context, array[i], i, array)) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}

function reduce(array, callback, initialValue) {
  let accumulator = (initialValue === undefined) ? undefined : initialValue;
  for (let i = 0; i < array.length; i += 1) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, array[i], i, array);
    } else {
      accumulator = array[i];
    }
  }
  return accumulator;
}

export {
  forEach,
  map,
  filter,
  reduce,
};
