function longestWordInString(args) {
  let wordsInString = args.split(' ');
  let longestWord = "";
  for(let i of wordsInString) {
    if(i.length > longestWord.length) longestWord = i;
  }
  return longestWord;
}

export { longestWordInString };
