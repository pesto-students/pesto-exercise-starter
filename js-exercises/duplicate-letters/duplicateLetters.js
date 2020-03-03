/* eslint-disable no-plusplus */

function duplicateLetters(str) {
  const input = str.split('');
  const duplicateLettersArray = [];
  for (let i = 0; i < input.length; i++) {
    if ((duplicateLettersArray.findIndex(ele => ele.letter === input[i])) === -1) {
      duplicateLettersArray.push({ letter: input[i], count: 1 });
    } else {
      const index = duplicateLettersArray.findIndex(ele => ele.letter === input[i]);
      duplicateLettersArray[index].count += 1;
    }
  }
  const newArr = duplicateLettersArray.map(ele => ele.count).filter(ele => ele > 1);
  if (newArr.length > 0) {
    return newArr.sort((a, b) => b - a)[0];
  }
  return false;
}

export {
  duplicateLetters,
};
