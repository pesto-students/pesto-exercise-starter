// count the frequency of letter in a map;
const countDuplicates = (letter, map) => {
  const duplicateLettersMap = map;
  const duplicateCount = duplicateLettersMap.get(letter) || 0;
  return duplicateCount;
};

// increment the count
const incrementDuplicateCounts = (count) => count + 1;
const findMaxDuplicate = (map) => {
  let maxCount = 0;
  map.forEach(value => {
    if (value > maxCount) {
      maxCount = value;
    }
  });
  return maxCount;
};

function duplicateLetters(...args) {
  const duplicateLettersMap = new Map();
  [...args[0]].forEach(l => {
    const duplicateCount = countDuplicates(l, duplicateLettersMap);
    const newCount = incrementDuplicateCounts(duplicateCount);
    duplicateLettersMap.set(l, newCount);
  });
  const maxCount = findMaxDuplicate(duplicateLettersMap);
  if (maxCount > 1) {
    return maxCount;
  }
  return false;
}
export {
  duplicateLetters,
};
