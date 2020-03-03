
function duplicateLetters(...args) {
  const array = args[0].split('');
  const myMap = new Map();

  for (let index = 0; index < array.length; index += 1) {
    if (myMap.get(array[index])) {
      const value = myMap.get(array[index]);
      myMap.set(array[index], value + 1);
    } else {
      myMap.set(array[index], 1);
    }
  }
  const result = Array.from(myMap.values()).sort((a, b) => a - b);
  if (result.length > 0) {
    if (result[result.length - 1] === 1) return false;
    return result[result.length - 1];
  }
  return false;
}

export {
  duplicateLetters,
};
