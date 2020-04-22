
// function duplicateLetters(...args) {
  function duplicateLetters(str) {
    let countObj = {};
    let allUnique = true;
  
    for (let char of str) {
      if (countObj[char]) {
        allUnique = false;
        countObj[char] += 1;
      } else {
        countObj[char] = 1;
      }
    }
  
    let max;
  
    if (allUnique) {
      return false;
    } else {
      for (let char in countObj) {
        max ? (max = Math.max(max, countObj[char])) : (max = countObj[char]);
      }
      return max;
    }
  }
  
  // export { duplicateLetters };
