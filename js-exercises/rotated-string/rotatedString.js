const EMPTY_SPACE = ''

const rotatedString = (string1, string2) => {
  let isRotatedString = false
  for(var index = 0; index < string1.length - 1; index++){
    string1 = rotateString(string1)
    if (isRotatedString) {
      break;
    } else {
      isRotatedString = (string1 === string2)
    }
  }
  return isRotatedString;
};

const rotateString = (string) => {
  let splittedStringArray = string.split(EMPTY_SPACE)
  let shiftedElement = splittedStringArray.shift()
  splittedStringArray.push(shiftedElement)
  return splittedStringArray.join('')
}

export { rotatedString };
