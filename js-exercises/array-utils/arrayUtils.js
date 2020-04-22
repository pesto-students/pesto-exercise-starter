function forEach(array, callBackFunction) {
  if (typeof callBackFunction !== "function") {
    return new Error(callBackFunction + ' is not a function')
  }

  for (let index = 0; index < array.length; index++) {
    callBackFunction(array[index], index, array)
  }
}

function map(array, callBackFunction) {
  if (typeof callBackFunction !== "function") {
    return new Error('callback is not a function')
  }
  let mappedArray = []
  for (let index = 0; index < array.length; index++) {
    mappedArray = [...mappedArray, (callBackFunction(array[index], index, array))]
  }
  return mappedArray
}

function filter(array, callBackFunction) {
  if (typeof callBackFunction !== "function") {
    return new Error(callBackFunction + ' is not a function')
  }
  let filteredArray = []
  for (let index = 0; index < array.length; index++) {
    if (callBackFunction(array[index], index, array)) {
      filteredArray = [...filteredArray, array[index]]
    }
  }
  return filteredArray
}

function reduce(array, callBackFunction, initialValue) {
  if (typeof callBackFunction !== "function") {
    return new Error(callBackFunction + ' is not a function')
  }
  let accumulator = initialValue || array[0]
  for (let index = 0; index < array.length; index++) {
    accumulator = callBackFunction(accumulator, array[index], index, array)
  }
  return accumulator
}


export {
  forEach,
  map,
  filter,
  reduce,
}