function longestWordInString(...args) {
  const words = args[0].split(' ');
  const longestWord = words.sort((a, b) => b.length - a.length)[0];
  return longestWord.length;
}

export { longestWordInString };
