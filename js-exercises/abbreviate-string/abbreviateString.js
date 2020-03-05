// import { isString } from "util";

function abbreviateString(str) {
  if (!(typeof str === 'string') || str.length === 0)
    return Error('Not a string');
  var str = str.trim().split(' ');
  if (str.length > 1) {
    return (
      str[0][0].toUpperCase() +
      str[0].slice(1) +
      ' ' +
      str[str.length - 1].charAt(0).toUpperCase() +
      '.'
    );
  }
  return str[0];
}

module.exports = { abbreviateString };
