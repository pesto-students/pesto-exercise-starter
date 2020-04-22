import { isString } from "util";

const abbreviateWord = word => word.charAt(0).toUpperCase() + '.'

function abbreviateString(inputString) {
  if (!isString(inputString)) throw new Error(`Expected string but found ${typeof inputString}`)

  const wordsArray = inputString.split(' ')
  const wordsArrayLength = wordsArray.length
  const [firstWord, lastWord] = [wordsArray[0], wordsArray[wordsArrayLength - 1]]

  return `${firstWord} ${abbreviateWord(lastWord)}`
}

export { abbreviateString };
