import { isString } from "util";

function abbreviateString(str) {
  if(!isString(str)) throw 'Not a String';
  else {
    let wordsInStr = str.split(' ');
    // we don't need abbreviation for single words
    if (wordsInStr.length < 2) return str;
    // lets just concatenate the 1st word, the uppercased first letter of the last word and a dot
    return wordsInStr[0] + ' ' + wordsInStr[wordsInStr.length-1][0].toUpperCase() + '.';
  }
}

export { abbreviateString };
