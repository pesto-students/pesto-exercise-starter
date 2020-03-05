import { isString } from "util";

function abbreviateString(str) {
  let inputStringToArray=str.split(' ');
  let firstWord=inputStringToArray[0];
  let lastWord=inputStringToArray[inputStringToArray.length-1].slice(0,1).toUpperCase() //For fetching first character in last word
return `${firstWord} ${lastWord}.`
}

export { abbreviateString };