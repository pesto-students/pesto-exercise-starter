/* eslint-disable no-var */
const deepCopyObject = objToCopy => {
  var deepCopiedObject;
  var value;
  var key;

  if (objToCopy === null || typeof objToCopy !== "object") {
    return objToCopy;
  }

  deepCopiedObject = Array.isArray(objToCopy) ? [] : {};

  for (key in objToCopy) {
    if (objToCopy[key] !== undefined) {
      value = objToCopy[key];
      deepCopiedObject[key] =
        value !== null && typeof value === "object"
          ? deepCopyObject(value)
          : value;
    }
  }

  return deepCopiedObject;
};

export { deepCopyObject };
