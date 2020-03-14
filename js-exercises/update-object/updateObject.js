
function updateObject(index, newVal, arr) {
  const newArr = [...arr];
  let newIndex = index;
  if (index < 0) newIndex = arr.length + index;
  if (index >= arr.length) throw Error('Index out of bounds.');
  newArr[newIndex] = newVal;
  return newArr;
}

export {
  updateObject,
};
