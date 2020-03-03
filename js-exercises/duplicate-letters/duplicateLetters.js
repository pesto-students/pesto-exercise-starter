
function duplicateLetters(...args) {
  const sortedStringArray = [...args[0]].sort();
  // console.log(sortedStringArray);
  sortedStringArray[sortedStringArray.length] = 0;
  const DUPLICATEARRAYCOUNT = [];
  let count = 1;
  let iterator = 0;
  while (sortedStringArray[iterator + 1] !== undefined) {
    if (sortedStringArray[iterator] === sortedStringArray[iterator + 1]) {
      count += 1;
    } else {
      if (count !== 1) {
        DUPLICATEARRAYCOUNT.push(count);
      }
      count = 1;
    }
    iterator += 1;
  }
  DUPLICATEARRAYCOUNT.sort();
  // console.log(DUPLICATEARRAYCOUNT[DUPLICATEARRAYCOUNT.length - 1]);
  if (DUPLICATEARRAYCOUNT[DUPLICATEARRAYCOUNT.length - 1] > 1) {
    return DUPLICATEARRAYCOUNT[DUPLICATEARRAYCOUNT.length - 1];
  }

  return false;
}
// console.log(duplicateLetters("psyfpghjklqerftyupiop"));
export {
  duplicateLetters,
};
