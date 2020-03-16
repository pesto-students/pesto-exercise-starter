const deepCopyObject = value => {
  if (isPrimitive(value)) {
    return value;
  }

  return deepCopyOfObject(value);
};

function deepCopyOfObject(object) {
  let deepCopyOfObject = {};

  for (const property in object) {
    const value = object[property];
    deepCopyOfObject[property] = deepCopyObject(value);
  }

  return deepCopyOfObject;
}

function isPrimitive(value) {
  return value === null || typeof value !== "object";
}

export { deepCopyObject };
