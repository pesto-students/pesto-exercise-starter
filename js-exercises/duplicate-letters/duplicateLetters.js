function duplicateLetters(...args) {
  const len = args[0].length;
  let maxCount = 0;
  for (let i = 0; i < len; i += 1) {
    let tmpCount = 0;
    for (let j = 0; j < len; j += 1) {
      if (args[0][i] === args[0][j]) tmpCount += 1;
    }
    if (tmpCount > maxCount) {
      maxCount = tmpCount;
    }
  }
  if (maxCount === 1) return false;
  return maxCount;
}
export { duplicateLetters };
