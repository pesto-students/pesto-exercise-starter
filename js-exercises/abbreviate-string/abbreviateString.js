/**
 * Please be sincear and let me know about all the mistakes i have made
 * please be a little kind as i am still a novoice and am still learning
 *                                                              @Bhargav Mantha
 *
 * Procedure/Approach/psudo code i am following
 * 1.now check if the input is a string or else return an error
 * 2.split the input string into words
 * 3.make the abbrivation return it
 */
const util = require('util');

const getWordsFromString = string => string.split(' ');
const checkIfString = string => util.isString(string);
function abbreviateString(string) {
  const stringCondition = checkIfString(string);
  let abbrivatedString = '';
  if (stringCondition) {
    const wordsArray = getWordsFromString(string);
    abbrivatedString = `${wordsArray[0]} ${[
      ...wordsArray[wordsArray.length - 1],
    ][0].toUpperCase()}.`;
    return abbrivatedString;
  }
  const error = new Error(
    `Sorry. Could not eveluate the input.Reason the input was not a sting.expected string got <${typeof string}>`
  );
  throw error;
}
// console.log(abbreviateString('Leeroy Fitzgerald Jenkins'));
export { abbreviateString };
