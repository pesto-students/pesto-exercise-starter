
function duplicateLetters(str) {
  
  const duplicates = {};
  
  for(var ch of str) {
    duplicates[ch] = duplicates[ch] ? duplicates[ch] + 1 : 1;
  }
  
  const maxCount = Math.max(...Object.values(duplicates));
  
  return maxCount > 1 ? maxCount : false;
}


export {
  duplicateLetters,
};
