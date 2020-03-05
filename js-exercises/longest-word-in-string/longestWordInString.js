function longestWordInString(...args) {

  let givenString = args.split(' ')

  let maxWordLength = 0;

  givenString.forEach(eachWordInString => {

    if (eachWordInString.length > maxWordLength)
      maxWordLength = eachWordInString.length
  })
  return maxWordLength

}
export { longestWordInString };
