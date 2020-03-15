/**
 * Please be sincear and let me know about all the mistakes i have made
 * please be a little kind as i am still a novoice and am still learning
 *                                                              @Bhargav Mantha
 *
 * Procedure/Approach/psudo code i am following
 * 1.convert the character to its respective ASCII Value.
 * 2.once converted add 13 to it and convert it back to the character and join it.
 * 3.And Ofcourse ignore the special characters
 */

/**
 *converts character to ASCII value
 * @param {String} of length 1 character
 */
const getASCIIValuesOfCharacter = character => character.charCodeAt();
/**
 * COnverts ASCII Number Back to character
 * @param {Number} number
 */
const convertBackToLetter = number => String.fromCharCode(number);

/**
 *Determines The Value TO be added to the ASCII VALUE and convert it to Cipher text
 * @param {Number} SHIFTNUMBERBY
 * @param {Number} ASCIIValue
 */
const cipherCharacterASCIIValue = (SHIFTNUMBERBY, ASCIIValue) => {
  if (ASCIIValue + SHIFTNUMBERBY > 90) {
    return 64 + (SHIFTNUMBERBY - (90 - ASCIIValue));
  }
  return ASCIIValue + SHIFTNUMBERBY;
};

/**
 *Main Function
 * @param  {String} inptString
 */
function rot13(inputString) {
  const arrayOfLetters = inputString.split('');
  const SHIFTNUMBERBY = 13;
  const cipheredArray = [];

  for (let i = 0; i < arrayOfLetters.length; i += 1) {
    const character = arrayOfLetters[i];
    const ASCIIValue = getASCIIValuesOfCharacter(character);
    if (ASCIIValue > 64) {
      const getcipherCharacterASCIIValue = cipherCharacterASCIIValue(
        SHIFTNUMBERBY,
        ASCIIValue
      );
      const cipheredCharacter = convertBackToLetter(
        getcipherCharacterASCIIValue
      );
      cipheredArray.push(cipheredCharacter);
    } else cipheredArray.push(character);
  }

  return cipheredArray.join('');
}
export { rot13 };
