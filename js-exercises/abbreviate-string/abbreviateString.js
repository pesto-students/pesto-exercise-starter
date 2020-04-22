import { isString } from 'util';

function abbreviateString(inputString = '') {
  if (isString(inputString)) {
    const splitStrings = inputString.trim().split(' ');
    if (splitStrings.length > 1) {
      return splitStrings[0].concat(
        ` ${splitStrings[splitStrings.length - 1].charAt(0).toUpperCase()}.`
      );
    }
    return splitStrings[0];
  }
  throw new Error('Not a string');
}

export { abbreviateString };
