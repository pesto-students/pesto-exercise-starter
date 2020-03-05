function longestWordInString(...args) {
  if (args === undefined) {
    return 0;
  }
  if (args[0] === undefined) {
    return 0;
  }
  const words = args[0].split(' ');
  const maxLengthWord = function (accumalator, currentWord) {
    return accumalator.length > currentWord.length ? accumalator : currentWord;
  };
  const maxWord = words.reduce(maxLengthWord);
  return maxWord.length;
}

export { longestWordInString };
