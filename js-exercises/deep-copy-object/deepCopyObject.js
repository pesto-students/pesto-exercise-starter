const deepCopyObject = objToCopy => {
  let outObject;
  let value;
  let key;

  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy;
  }

  if (objToCopy.constructor !== Object && objToCopy.constructor !== Array) {
    return objToCopy;
  }

  // eslint-disable-next-line prefer-const
  outObject = Array.isArray(objToCopy) ? [] : {};

  // eslint-disable-next-line guard-for-in
  for (key in objToCopy) {
    value = objToCopy[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = (typeof value === 'object' && value !== null) ? deepCopyObject(value) : value;
  }

  return outObject;
};

export { deepCopyObject };
