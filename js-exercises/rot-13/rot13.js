function rot13(...args) {
  const encodedMsg = args[0];
  let decodedMsg = '';
  for (let i = 0; i < encodedMsg.length; i += 1) {
    const currentCharCode = encodedMsg.charCodeAt(i);

    if ((currentCharCode < 65 || currentCharCode > 122)
    || (currentCharCode > 90 && currentCharCode < 97)) {
      decodedMsg += encodedMsg[i];
    } else {
      let cipherDecodedChar = currentCharCode + 13;

      if ((currentCharCode >= 97 && cipherDecodedChar > 122)
      || (currentCharCode <= 90 && cipherDecodedChar > 90)) {
        cipherDecodedChar -= 26;
      }

      decodedMsg += String.fromCharCode(cipherDecodedChar);
    }
  }
  return decodedMsg.trim();
}

export {
  rot13,
};
