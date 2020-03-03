function duplicateLetters(...args) {
  const chars = `${args} `;
  let index = 0;
  let duplicate = 0;
  for (const letter of chars) {
    if (chars.indexOf(letter) !== index) {
      duplicate += 1;
    }
    index += 1;
  }
  if (!duplicate) {
    return false;
  }
  return duplicate;
}

export {
  duplicateLetters,
};
