/**
 * Please be sincear and let me know about all the mistakes i have made
 * please be a little kind as i am still a novoice and am still learning
 *                                                              @Bhargav Mantha
 *
 * Procedure/Approach/psudo code i am following
 * 1.LongestWordInString is a function which takes input as a parameter
 * 2.I am not taking into account that the sentance can have letters of same length
 *  even if the do the last occuring word is replaced or an array of words is pushed
 *  into the key of the respective Json
 * 3.After this the function is called to return the respective sorted keys of array
 *  using Object.keys
 * @param {String} inputString
 */
/**
 * this function is rresponsable for splitting the sentance into a word of array and
 * returning the same
 * @param {String} inputString
 */
const getwordsFromString = inputString => {
  const wordArray = inputString.split(' ');
  return wordArray;
};
/**
 * takes the input as array of an object
 * @param {array-Object} arrayOfWords
 */
const getlongestWordLength = arrayOfWords => {
  const JSONOfWordLength = {};
  for (let i = 0; i < arrayOfWords.length; i += 1) {
    const lengthOfWord = arrayOfWords[i].length;
    const words = JSONOfWordLength[`${lengthOfWord}`];
    const wordOrArrayOfCommonLengthWords =
      words === undefined ? arrayOfWords[i] : [...words, arrayOfWords[i]];
    JSONOfWordLength[lengthOfWord] = wordOrArrayOfCommonLengthWords;
  }
  const arrayOfKeysOfWordJsonLength = Object.keys(JSONOfWordLength);
  const sortedKeys = arrayOfKeysOfWordJsonLength.sort(
    (previousNumber, nextNumber) => previousNumber - nextNumber
  );
  const longestWordlength = sortedKeys[sortedKeys.length - 1];
  return longestWordlength;
};
function longestWordInString(inputString) {
  const wordsInString = getwordsFromString(inputString);
  const longestWord = parseInt(getlongestWordLength(wordsInString));
  console.log(longestWord);
  return longestWord;
}
longestWordInString(
  'What if we try a super-long word such as otorhinolaryngology'
);
export { longestWordInString };
/**
 * regards Bhargav Mantha-Awaiting Response
 */
