function forEach(arr, cb) {
  const isArray = Array.isArray(arr);
  const isFunction = typeof cb === 'function';
  if (!isArray) {
    console.log('yes');
    throw new TypeError('Invalid array');
  }
  if (!isFunction) {
    throw new Error('Callback must be a function');
  }
  let index = 0;
  for (const element of arr) {
    cb(element, index, arr);
    index += 1;
  }
}
function map(arr, cb) {
  const isArray = Array.isArray(arr);
  const isFunction = typeof cb === 'function';
  if (!isArray) {
    throw new TypeError('Invalid array');
  }
  if (!isFunction) {
    throw new Error('Callback must be a function');
  }
  let index = 0;
  const resultArray = [];
  for (const element of arr) {
    resultArray.push(cb(element, index, arr));
    index += 1;
  }
  return resultArray;
}
export {
  forEach,
  map,
  // filter,
  // reduce,
};
