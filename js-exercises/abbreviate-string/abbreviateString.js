import {
  isString
} from "util";

function abbreviateString(expectedString) {
  if (typeof expectedString !== "string") throw new Error("argument not a string");
  let arrayOfWords = expectedString.split(" ");
  let firstWord = arrayOfWords[0];
  let lastWord = arrayOfWords[arrayOfWords.length - 1];
  let lastWordFirstLetter = lastWord[0];
  return firstWord + " " + lastWordFirstLetter.toUpperCase() + ".";

}

export {
  abbreviateString
};