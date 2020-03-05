const SINGLE_SPACE = ' '

const maxOf = (array) => Math.max(...array)

function longestWordInString(sentence) {
  let splittedSentence = sentence.split(SINGLE_SPACE)
  let wordCounter = new Map()
  for(const word of splittedSentence) {
    wordCounter[word] = word.length
  }
  return maxOf(Object.values(wordCounter))
}

export { longestWordInString };
