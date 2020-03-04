function rot13(string) {
  let arrayOfEncodedWords = string.split(' ');

  function characterDecoder(encodedCharacter) {
    let upperCaseRegex = /^[A-Z]/g;
    if (!upperCaseRegex.test(encodedCharacter)) {
      return encodedCharacter;
    }
    let encodedCharacterASCIICode = encodedCharacter.charCodeAt(0);
    let numberOfShifts = 13;
    if (encodedCharacterASCIICode + numberOfShifts > 90) {
      return String.fromCharCode(encodedCharacterASCIICode - numberOfShifts);
    } else {
      return String.fromCharCode(encodedCharacterASCIICode + numberOfShifts)
    }
  }
  let arrayOfDecodedWords = arrayOfEncodedWords.map(encodedWord => {
    let decodedWord = "";
    for (let encodedCharacter of encodedWord) {
      decodedWord += characterDecoder(encodedCharacter)
    }
    return decodedWord;
  });
  return arrayOfDecodedWords.join(" ");

}

export {
  rot13,
};