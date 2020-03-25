/**
 * Please be sincear and let me know about all the mistakes i have made
 * please be a little kind as i am still a novoice and am still learning
 *                                                              @Bhargav Mantha
 *
 * consider the example [ '539', '8', '201' ] in string literal format on convertion we get
 * Procedure/Approach/psudo code i am following
 * 1.Step one Split the string into specific numbers Strings based on \n =>[ '539', '8', '201' ]
 * 2.now get the greatest length in the above array array => in the abpove case its 3
 * 3. now add zeros to the places without the same for missing positions
 * ex---[ '539', '008', '201' ]
 * 4.now we generate a big number JSON with key as the units(0),once(1),tens(2) and so onn=>
 * {
		'0': [ '2', '0', '5' ],
  	'1': [ '0', '0', '3' ],
  	'2': [ '1', '8', '9' ]
		}
 * 
 * 
 * 
 * 5.now calculate the sume of each array
 * 6.pass On the carry
 * 7.reverse the array
 * VOOOLAA we have the sum of big integers
 * */

/**
 *function to split the string by \n
 * @param {String} intString
 */
const splitStringBasedOnNewLine = intString => intString.split('\n');

/**
 *	returns the length of trhe greatest array number
 * @param {Array Object} bigNumbersArray
 */
const getLargestLengthInArray = bigNumbersArray => {
  let largestLength = 0;

  for (let i = 0; i < bigNumbersArray.length; i += 1) {
    if (bigNumbersArray[i].length > largestLength) {
      largestLength = bigNumbersArray[i].length;
    }
  }
  return largestLength;
};
/**
 *returns the JSON OF THE BIGNUMBER
 * @param {Array Object} bigNumbersArray
 */
const bigNumberJSONGenerator = bigNumbersArray => {
  const bigNumbersJSON = {};

  // eslint-disable-next-line no-unused-vars
  for (const key of bigNumbersArray.keys()) {
    bigNumbersJSON[`${key}`] = bigNumbersArray[`${key}`];
  }
  return bigNumbersJSON;
};
/**
 *	returns the mapped position array object
 * @param {number} bignumber
 * @param {Obj} OBJECT
 */
const positionMapperJSONGenerator = (bignumber, OBJECT) => {
  const bigNumberArray = [...bignumber];
  // eslint-disable-next-line no-unused-vars
  for (let i = 0; i < OBJECT.largestLength; i += 1) {
    const number = OBJECT.bigNumbersPositionMapperJSON[`${i}`];
    OBJECT.bigNumbersPositionMapperJSON[`${i}`] =
      number === undefined
        ? bigNumberArray[`${i}`]
        : [bigNumberArray[`${i}`], ...number];
    // console.log(bigNumberArray[`${i}`]);
  }

  return OBJECT.bigNumbersPositionMapperJSON;
};

const positionTrackerJsonGenerator = (bigNumbersJSON, largestLength) => {
  const bigNumbersPositionMapperJSON = {};

  const OBJECT = {
    largestLength,
    bigNumbersPositionMapperJSON,
  };
  Object.keys(bigNumbersJSON).forEach(function(key) {
    positionMapperJSONGenerator(bigNumbersJSON[`${key}`], OBJECT);
  });
  return bigNumbersPositionMapperJSON;
};
/**
 *returns the string with length of the largest big integer with 
 replaced missing 0
 * @param {Array Object} bigNumbersArray
 * @param {Number} largestLength
 */
const recursive0Adder = (bigNumbersArray, largestLength) => {
  const finalArray = [];
  bigNumbersArray.forEach(element => {
    let i = 0;
    while (element.length < largestLength) {
      i += 1;
      // eslint-disable-next-line no-param-reassign
      element = `0${element}`;
    }
    finalArray.push(element);
  });
  return finalArray;
};
/**
 * returns Sum of the array
 * @param {Array Object} array
 */
const sumOfAnArray = array =>
  array.reduce(
    (previousElement, nextElement) =>
      parseInt(previousElement) + parseInt(nextElement),
    0
  );
/**
 * returns The actual sum of the Big integer
 * @param {JSON object} positionTrackerJSON
 */
const bigIntegerSumCalculator = positionTrackerJSON => {
  let sumArray = [];
  let sum = 0;
  let carry = 0;
  for (let i = Object.keys(positionTrackerJSON).length - 1; i >= 0; i -= 1) {
    let temp = sumOfAnArray(positionTrackerJSON[`${i}`]);

    temp = `${temp}`;
    sum = (parseInt(temp) % 10) + parseInt(carry);

    carry = Math.trunc(parseInt(temp) / 10);

    sumArray.push(`${sum}`);
  }
  sumArray = sumArray.reverse().join('');
  console.log(sumArray);
  return sumArray;
};
/**
 * the actual function call
 * @param {String literal} intString
 */
function addBigIntegers(intString) {
  let bigNumbersArray = splitStringBasedOnNewLine(intString);
  bigNumbersArray = bigNumbersArray.map(element => element.trim());
  /* console.log(bigNumbersArray); */
  const largestLength = getLargestLengthInArray(bigNumbersArray);
  bigNumbersArray = recursive0Adder(bigNumbersArray, largestLength);
  /* console.log(bigNumbersArray); */
  const bigNumbersJSON = bigNumberJSONGenerator(bigNumbersArray);
  const positionTrackerJSON = positionTrackerJsonGenerator(
    bigNumbersJSON,
    largestLength
  );
  // console.log(positionTrackerJSON);
  const sumOfBigintegers = bigIntegerSumCalculator(positionTrackerJSON);
  /* console.log(sumOfBigintegers); */
}
/* addBigIntegers(`8756499060735809031881837100717640
70934460872207922801951375249700
8977770975897338226131985886684681
91454061215320969515432196409002
651196844487299640943680194655725
6961749288159882186283784162262
9036094416288347680296039655938060
939687434873009984637644098803640
79366258890858900774075693801787
14118147069715140307096132393279
934555969025599810767196778088364
7551918592800103991210533406382642`);
 */
export { addBigIntegers };
