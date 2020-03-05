function longestWordInString(sentence) {
  let characterCount = 0
  let maximumCharacterCount = 0 
  let space = ' '
  for(let letter of sentence){
    if(letter !== space) {
      characterCount ++;
    } else {
      maximumCharacterCount = characterCount > maximumCharacterCount ? characterCount : maximumCharacterCount
      characterCount = 0
    }
  }
  
  return characterCount > maximumCharacterCount ? characterCount : maximumCharacterCount
}

export { longestWordInString };
