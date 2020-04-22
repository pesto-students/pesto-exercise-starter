import { isString } from "util";

function abbreviateString(str) {
  if (typeof str !== 'string') {
   throw "Parameter is not a string value!";
 }
  let words =   str.split(' ');
  let lastWord = words[words.length-1].split('')[0].toUpperCase();
  return `${words[0]} ${lastWord}.`;
}

export { abbreviateString };
