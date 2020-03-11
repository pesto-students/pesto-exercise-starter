const argsString = (message, args) => {
  let interpolatedString = '';
  let trackBrackets = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] == '{' && typeof message[i + 1] != 'undefined' && message[i + 1] == '}') {
      interpolatedString += args[trackBrackets];
      trackBrackets++;
      i++;
    } else {
      interpolatedString += message[i];
    }
  }
  return interpolatedString;
};
export {
  argsString
};
