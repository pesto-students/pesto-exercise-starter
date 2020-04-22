function longestWordInString(input) {
  return typeof input !== 'string'
    ? ''
    : input.split(' ').sort((a, b) => b.length - a.length)[0].length;
}
export { longestWordInString };
