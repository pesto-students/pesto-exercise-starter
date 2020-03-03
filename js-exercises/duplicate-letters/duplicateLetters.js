
function duplicateLetters(string) {
  let max = 1
  let lettersCount = {}

  for (let letter of string) {
    if (letter in lettersCount) {
      lettersCount[letter]++
    } else {
      lettersCount[letter] = 1
    }
  }

  for (let val in lettersCount) {
    if (lettersCount[val] > max) {
      max = lettersCount[val]
    }
  }

  return max === 1 ? false : max
}

export {
  duplicateLetters,
};
