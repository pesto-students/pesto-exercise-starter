/**
 * Please be sincear and let me know about all the mistakes i have made
 * please be a little kind as i am still a novoice and am still learning
 *                                                              @Bhargav Mantha
 *
 * Procedure/Approach/psudo code i am following
 * 1.check if string 2 is a substring of string 1 + string 1 and
 * 2.string1 is not equal to string 2
 * @param {String,String} stringToCompare1,stringToCompare2
 */

const rotatedString = (stringToCompare1, stringToCompare2) => {
  const stringAgainstWhichToTest = stringToCompare1 + stringToCompare1;
  if (
    stringAgainstWhichToTest.includes(stringToCompare2) === true &&
    stringToCompare1 !== stringToCompare2
  )
    return true;
  return false;
};

export { rotatedString };
