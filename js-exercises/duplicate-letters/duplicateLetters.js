function duplicateLetters(...args) {
  const occurances = {};
  const testString = args[0];
  let max = 0;
  for (let i = 0; i < testString.length; i += 1) {
    const character = testString.charAt(i);
    if (occurances[character]) {
      occurances[character] += 1;
    } else {
      occurances[character] = 1;
    }
    if (occurances[character] > max) {
      max = occurances[character];
    }
  }
  return max <= 1 ? false : max;
}
export {
  duplicateLetters,
};
