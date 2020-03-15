/**
 * Please be sincear and let me know about all the mistakes i have made
 * please be a little kind as i am still a novoice and am still learning
 *                                                              @Bhargav Mantha
 *
 * Procedure/Approach/psudo code i am following
 * 1.cI constructed a regex to check if the given phone number is
 * actually in the format of US Phone Number
 * 2. If the phone number is iun the US phone number format return true else false
 * @param {String} (Phonenumber)
 */

/**
 * this function is responsable for checking if the phone number is valied or not
 * i have used a regex to perform the same please let me know ur openion
 * @param {String} inputPhoneNumber
 */
const regExMatcher = inputPhoneNumber => {
  const regex = /^(1\s)?\(?\d{3}(\))?(-|\s)?\d{3}(-|\s)?\d{4}$/;
  const pattern = new RegExp(regex);
  const resultOfRegx = pattern.test(inputPhoneNumber);
  return resultOfRegx;
};
function telephoneCheck(inputPhoneNumber) {
  const resultOfReplacement = regExMatcher(inputPhoneNumber);
  return resultOfReplacement;
}
export { telephoneCheck };
