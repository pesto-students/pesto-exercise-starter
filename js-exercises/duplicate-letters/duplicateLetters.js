function buildFrequencyMapOf(str) {
  const frequencyOfLetters = new Map();
  for (const letter of str) {
    const letterCount = frequencyOfLetters.get(letter);
    if (letterCount !== undefined) {
      frequencyOfLetters.set(letter, letterCount + 1);
    } else {
      frequencyOfLetters.set(letter, 1);
    }
  }
  return frequencyOfLetters;
}

function maxOf(array) {
  return Math.max(...array);
}

function duplicateLetters(string) {
  const frequencyOfLetters = buildFrequencyMapOf(string)
  const justFrequencies = Array.from(frequencyOfLetters.values());
  const maximumFrequency = maxOf(justFrequencies);
  if (maximumFrequency === 1) {
    return false;
  }
  return maximumFrequency;
}

export {
  duplicateLetters,
};