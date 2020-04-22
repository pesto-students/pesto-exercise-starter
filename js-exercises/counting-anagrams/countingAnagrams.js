const countingAnagrams = str => {
  let words = str.split(' ');
  let anagramsCount = 0;
  words = words.sort();
  const duplicateWord = [];
  for (let word of words) {
    if (word.length > 1) {
      word = word.split('').sort().join('');
      if (duplicateWord[word] === undefined) {
        duplicateWord[word] = 1;
      } else if (duplicateWord[word] === 1) {
        anagramsCount += 1;
        duplicateWord[word] = 2;
      }
    }
  }
  return anagramsCount;
};

export { countingAnagrams };
