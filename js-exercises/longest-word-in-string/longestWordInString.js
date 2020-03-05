function longestWordInString(...args) {
  const wordList = args[0].split(' ');
  let maxWordLength = 0;
  for (let i = 0; i < wordList.length; i += 1) {
    if (wordList[i].length > maxWordLength) {
      maxWordLength = wordList[i].length;
    }
  }
  return maxWordLength;
}

export { longestWordInString };
