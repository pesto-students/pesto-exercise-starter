const alphabeticShift = inputString => {
  let result = "";
  let charcode = 0;
  let shiftCharWithNum = 1;

  for (let i = 0; i < inputString.length; i++) {
    charcode = inputString[i].charCodeAt() + shiftCharWithNum;
    result += String.fromCharCode(charcode);
  }
  return result;
};

export { alphabeticShift };
