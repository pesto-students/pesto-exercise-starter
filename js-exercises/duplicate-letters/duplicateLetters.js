
function duplicateLetters(...args) {
  const str = args[0];
  const sizeOfArray = 256;
  const count = new Array(sizeOfArray);
  let maxCount = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (count[str.charAt(i)]) count[str.charAt(i)] += 1;
    else count[str.charAt(i)] = 1;
    maxCount = Math.max(maxCount, count[str.charAt(i)]);
  }
  if (maxCount > 1) return maxCount;

  return false;
}

export {
  duplicateLetters,
};
