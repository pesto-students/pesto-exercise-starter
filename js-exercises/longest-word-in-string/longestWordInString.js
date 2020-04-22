function longestWordInString(string) {
  const stringArray = string.split(' ');
  let longestWordSize = 0;
  for (let i = 0; i < stringArray.length; i++) { 
    if (stringArray[i].length > longestWordSize) {
      longestWordSize = stringArray[i].length;
    }
  }
  return longestWordSize;
}
module.export = { longestWordInString };
