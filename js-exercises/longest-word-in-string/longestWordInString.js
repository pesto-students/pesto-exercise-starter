function longestWordInString(...args) {
  let Sentence = args[0];
  let WordsArray = Sentence.split(' ');
  let LongestWordLength = WordsArray[0].length;
  for (let Word of WordsArray) {
    if (WordsArray.indexOf(Word) == 0) continue;
    if (Word.length > LongestWordLength) LongestWordLength = Word.length;
  }
  return LongestWordLength;
}
export {
  longestWordInString
};
