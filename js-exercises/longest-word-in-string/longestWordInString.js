function longestWordInString(str) {
  const longestWord = getLongestWordInString(str);
  return longestWord.length;
}

function getLongestWordInString(string) {
  const arrayWithWordsInString = string.split(' ');
  let longestWord = '';
  arrayWithWordsInString.forEach(element => {
    if(element.length > longestWord.length) {
      longestWord = element; 
    }
  });
  return longestWord;
}

export { longestWordInString };
