const deepCopyObject = objToCopy => {
  if (typeof (objToCopy) !== 'object') {
    var premitive = objToCopy
    return premitive
  }

  if (objToCopy === null) {
    return null
  }

  var hard_copy = {}
  for (let k in objToCopy) {
    hard_copy[k] = Object.assign({}, objToCopy[k])
  }
  return hard_copy;
};

//console.log(deepCopyObject(4));


export { deepCopyObject };
