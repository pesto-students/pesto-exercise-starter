import { isString } from "util";

function abbreviateString(str) {
  if (!isString(str)) throw new Error('Invalid Parameter, No String Found');

  const wordsInStringArray = str.split(' '); 
  const firstWordInString = wordsInStringArray[0];
  const lastWordInString = wordsInStringArray[wordsInStringArray.length - 1];

  return `${firstWordInString} ${lastWordInString[0].toUpperCase()}.`;
}

export { abbreviateString };
