
const findrequiredDeletionNumber = (word) => {
  let result = 0;
  let index = 1;
  for (index; index < word.length; index += 1) {
    const previousChar = word[index - 1];
    const currentChar = word[index];
    if (previousChar === currentChar) {
      result += 1;
    }
  }
  return result;
};

function alternatingCharacters(arr) {
  const wordList = arr.map(element => element);
  const result = [];
  wordList.forEach(word => {
    const requireddeletionNumber = findrequiredDeletionNumber(word);
    result.push(requireddeletionNumber);
  });
  return result;
}

// console.log(alternatingCharacters(['aaaa', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB']));

export { alternatingCharacters };
