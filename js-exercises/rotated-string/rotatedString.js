const rotatedString = (str1, str2) => {
  if (str1 === str2) return false;
  if (str1.length !== str2.length) return false;

  function rotateString(string) {
    for (let i = 1; i < string.length; i++) {
      let startIndex = 0;
      let individualVersionOfRotatedString = string.substring(i) + string.substring(startIndex, i);
      if (individualVersionOfRotatedString === str2) return true;
    }
    return false;
  }
  return rotateString(str1);
};

export {
  rotatedString
};