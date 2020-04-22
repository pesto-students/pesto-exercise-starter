/* eslint-disable */

function rot13(inputString) {
  return inputString.replace(/([A-M])|([N-Z])/g, (letter, regex1) =>
    String.fromCharCode(letter.charCodeAt(0) + (regex1 ? 13 : -13))
  );
}

export { rot13 };
