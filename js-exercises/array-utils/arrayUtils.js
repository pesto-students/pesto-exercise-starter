Array.prototype.forEach = function(callbackFn) {
  if (!this.length) return undefined;
  for(let index= 0; index < this.length; index++) {
    callbackFn(this[index], index, this)
  }
}

Array.prototype.map = function(callbackFn) {
  let modifiedArray = [];
  for(let index = 0; index < this.length; index++) {
    modifiedArray.push(callbackFn(this[index], index, this))
  }
  return modifiedArray;
}

Array.prototype.filter = function(callbackFn) {
  let filteredArray = [];
  for(let index = 0; index < this.length; index++) {
    let valueToBeFiltered = callbackFn(this[index], index, this);
    if (valueToBeFiltered) {
      filteredArray.push(this[index]);
    }
  }
  return filteredArray;
}

Array.prototype.reduce = function(callbackFn, initialValue) {
  let reducedValue = initialValue === undefined ? this[0] : initialValue;
  for(let index = 0; index < this.length; index++) {
    reducedValue = callbackFn(reducedValue, this[index]);
  }
  return reducedValue;
}

export {
  forEach,
  map,
  filter,
  reduce,
}