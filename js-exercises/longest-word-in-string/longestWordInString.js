function longestWordInString(...args) {
  const words = args[0].split(' ');
  return Math.max(...(words.map(word => word.length)));
}

export { longestWordInString };
