
function duplicateLetters(input) {
  const letters = {};
  let maxFreq = 0;
  for (const l of input) {
    if (l in letters) {
      letters[l] += 1;
    } else {
      letters[l] = 1;
    }

    if (maxFreq < letters[l]) {
      maxFreq = letters[l];
    }
  }

  if (maxFreq === 1) {
    return false;
  }

  return maxFreq;
}

export {
  duplicateLetters,
};
