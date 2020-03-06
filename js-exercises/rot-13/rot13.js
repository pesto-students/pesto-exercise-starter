function rot13Util(letter) {
  const charCode = letter.charCodeAt(0);
  const encodedCharCode = (charCode - 13 < 65) ? (91 - (65 - (charCode - 13))) : (charCode - 13);
  return String.fromCharCode(encodedCharCode);
}

function rot13(...args) {
  const phrase = args[0];
  let decodedPhrase = '';
  const specials = [' ', '.', '?', '!'];
  for (let i = 0; i < phrase.length; i += 1) {
    if (specials.includes(phrase[i])) decodedPhrase += phrase[i];
    else decodedPhrase += rot13Util(phrase[i]);
  }
  return decodedPhrase;
}

export {
  rot13,
};
