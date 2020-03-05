const rotatedString = (str1, str2) => {
  let returnObj = false;
  if (str2.length === str1.length && str1 !== str2) {
    const firstChar = str1.charAt(0);
    const firstCharMatchIndices = [];
    for (let k = 0; k < str2.length; k += 1) {
      if (str2[k] === firstChar) firstCharMatchIndices.push(k);
    }
    for (let j = 0; returnObj === false && j < firstCharMatchIndices.length; j += 1) {
      const rotatedStringStartingLocation = firstCharMatchIndices[j];
      for (let i = 0; i < str1.length; i += 1) {
        const charToSearch = str1.charAt(i);
        const str2CharLocation = (rotatedStringStartingLocation + i) % str2.length;
        if (charToSearch === str2.charAt(str2CharLocation)) {
          if (i === str1.length - 1) {
            returnObj = true;
          }
        } else {
          break;
        }
      }
    }
  }
  return returnObj;
};

export { rotatedString };
