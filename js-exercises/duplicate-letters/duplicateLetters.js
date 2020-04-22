function duplicateLetters(inputStr = '') {
  const eachCharCount = {};
  let maxCount = 0;

  inputStr.split('').forEach(char => {
    if (eachCharCount[char] !== undefined) {
      eachCharCount[char] += 1;
      if (eachCharCount[char] > maxCount) maxCount = eachCharCount[char];
    } else {
      eachCharCount[char] = 1;
    }
  });

  return maxCount === 0 ? false : maxCount;
}

export { duplicateLetters };
