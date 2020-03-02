function duplicateLetters(...args) {
  let lettersCount = {};
  for (let letter of args[0]) {
    if (letter in lettersCount) {
      lettersCount[letter]++;
    } else {
      lettersCount[letter] = 1;
    }
  }
  let max = 1;
  for (let val in lettersCount) {
    if (lettersCount[val] > max) {
      max = lettersCount[val];
    }
  }
  if (max === 1) {
    return false;
  } else {
    return max;
  }
}

export {
  duplicateLetters,
};