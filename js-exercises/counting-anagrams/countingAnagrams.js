const countingAnagrams = phrase => {
  if (typeof phrase !== 'string') {
    throw new TypeError(`${phrase} is not a string`);
  }
  const sortWord = item => item.split('').sort().join('');
  const mappedArray = phrase.split(' ').filter(item => item.length > 1).map(sortWord);
  const uniqueWords = new Set(mappedArray);
  return uniqueWords.size < mappedArray.length ? uniqueWords.size : 0;
};

export { countingAnagrams };
