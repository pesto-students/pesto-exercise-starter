/* eslint-disable no-plusplus */

function duplicateLetters(...args) {
  const arr = args[0].split('').sort();
  const obj = Object.create(null);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  const max = Object.values(obj).sort().reverse()[0];

  return max > 1 ? max : false;
}

export {
  duplicateLetters,
};
