function longestWordInString(string) {

  let words = string.split(" ");

  let longestWordCount = 0;

  for(let word of words){
    if(word.length > longestWordCount){
      longestWordCount = word.length;
    }
  }

  return longestWordCount;
}

export { longestWordInString };
