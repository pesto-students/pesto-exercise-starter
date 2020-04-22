const longestWordInString = inputString => inputString
    .split(" ")
    .reduce((word, longestWord) => {
      if (word.length > longestWord.length) longestWord = word
      return longestWord
    }, "")
    .length

export { longestWordInString };
