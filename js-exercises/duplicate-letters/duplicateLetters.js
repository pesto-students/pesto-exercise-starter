
function duplicateLetters(input) {
  const letters = {};
  let maxFreqOfLetter = 0;
  for (const l of input) {
    if (l in letters) {
      letters[l] += 1;
    } else {
      letters[l] = 1;
    }

    if (maxFreqOfLetter < letters[l]) {
      maxFreqOfLetter = letters[l];
    }
  }

  if (maxFreqOfLetter === 1) {
    return false;
  }

  return maxFreqOfLetter;
}

export {
  duplicateLetters,
};
