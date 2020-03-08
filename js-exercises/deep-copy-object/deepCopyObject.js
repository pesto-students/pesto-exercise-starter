const deepCopyObject = objToCopy => {
  let outObject = {},
    value,
    key;

  if (typeof objToCopy !== "object" || objToCopy === null) {
    return objToCopy; // Return the value if objToCopy is not an object
  }
  for (key in objToCopy) {
    value = objToCopy[key];

    // Recursively (deep) copy for nested objects
    outObject[key] = typeof value === "object" ? deepCopyObject(value) : value;
  }
  return outObject;
};

export { deepCopyObject };
