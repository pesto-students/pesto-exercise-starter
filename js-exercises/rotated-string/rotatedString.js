/* eslint-disable */
const rotatedString = (inputString, rotated) =>
  inputString.length === rotated.length &&
  inputString !== rotated &&
  (inputString + inputString).indexOf(rotated) !== -1;

export { rotatedString };
