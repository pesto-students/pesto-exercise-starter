function longestWordInString(stringArgs) {
  let splitedString = stringArgs.split(" ");

  let longestWordInPassedString = splitedString.reduce(function(
    longestWord,
    currentWord
  ) {
    if (currentWord.length > longestWord.length) {
      return currentWord;
    } else {
      return longestWord;
    }
  },
  "");

  return longestWordInPassedString.length;
}

export { longestWordInString };
