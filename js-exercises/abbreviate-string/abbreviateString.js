import { isString } from 'util';

function abbreviateString(str) {
  if (!isString(str)) throw Error('Input should be a string.');
  const words = str.split(' ');
  const firstWord = words[0];
  const abbreviatedLastWord = (words[words.length - 1][0]).toUpperCase();

  return `${firstWord} ${abbreviatedLastWord}.`;
}

export { abbreviateString };
