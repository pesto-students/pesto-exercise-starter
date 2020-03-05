import { isString } from 'util';

function abbreviateString(str) {
  let returnString = '';
  if (isString(str)) {
    const stringArray = str.split(' ');
    returnString = `${stringArray[0]} ${stringArray[stringArray.length - 1].charAt(0).toLocaleUpperCase()}.`;
  } else {
    throw new Error();
  }

  return returnString;
}

export { abbreviateString };
