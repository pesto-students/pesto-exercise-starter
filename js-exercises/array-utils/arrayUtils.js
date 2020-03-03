//first argument array is on which forEach is getting called.
function forEach(array, callback, thisValue) {
  // check if callback is a valid function
  if (!(callback instanceof Function)) {
    throw new Error("Not a valid callback");
  }
  if (Array.isArray(array)) {
    for (let index = 0; index < array.length; index++) {
      let individualElementOfArray = array[index];
      //check if the individualElementOfArray is not empty
      if (!(array.hasOwnProperty(index) === false && individualElementOfArray === undefined)) {
        if (Boolean(thisValue)) {
          callback.bind(thisValue);
        }
        callback(individualElementOfArray, index, array);
      }
    }
  } else {
    throw new Error("Not a valid array");
  }
}

function map(array, callback, thisValue) {
  // check if callback is a valid function
  if (!(callback instanceof Function)) {
    throw new Error("Not a valid callback");
  }
  if (Array.isArray(array)) {
    let resultedArray = [];
    for (let index = 0; index < array.length; index++) {
      let individualElementOfArray = array[index];
      //check if the individualElementOfArray is not empty
      if (!(array.hasOwnProperty(index) === false && individualElementOfArray === undefined)) {
        if (Boolean(thisValue)) {
          callback.bind(thisValue);
        }
        resultedArray.push(callback(individualElementOfArray, index, array));
      }
    }
    return resultedArray;
  } else {
    throw new Error("Not a valid array");
  }
}

function filter(array, callback, thisValue) {
  // check if callback is a valid function
  if (!(callback instanceof Function)) {
    throw new Error("Not a valid callback");
  }
  if (Array.isArray(array)) {
    let resultedArray = [];
    for (let index = 0; index < array.length; index++) {
      let individualElementOfArray = array[index];
      //check if the individualElementOfArray is not empty
      if (!(array.hasOwnProperty(index) === false && individualElementOfArray === undefined)) {
        if (Boolean(thisValue)) {
          callback.bind(thisValue);
        }
        if (callback(individualElementOfArray, index, array)) {
          resultedArray.push(individualElementOfArray);
        }
      }
    }
    return resultedArray;
  } else {
    throw new Error("Not a valid array");
  }
}

function reduce(array, callback, initialValue) {
  // check if callback is a valid function
  if (!(callback instanceof Function)) {
    throw new Error("Not a valid callback");
  }
  if (!array.length) {
    throw new Error("Empty array");
  }
  if (Array.isArray(array)) {
    let index = 1;
    let accumulator = array[0];
    if (Boolean(initialValue)) {
      index = 0;
      accumulator = initialValue;
    }
    for (index; index < array.length; index++) {
      let currentValue = array[index];
      //check if the currentValue is not empty
      if (!(array.hasOwnProperty(index) === false && currentValue === undefined)) {
        accumulator = callback(accumulator, currentValue, index, array);
      }
    }
    return accumulator;
  } else {
    throw new Error("Not a valid array");
  }
}

export {
  forEach,
  map,
  filter,
  reduce,
}