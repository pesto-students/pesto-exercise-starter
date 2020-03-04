function longestWordInString(string) {
  const arrayOfWords = string.split(" ");
  let maximumLength = arrayOfWords.pop().length;
  arrayOfWords.forEach((word) => {
    if (word.length > maximumLength) {
      maximumLength = word.length;
    }
  });
  return maximumLength;
}

export {
  longestWordInString
};