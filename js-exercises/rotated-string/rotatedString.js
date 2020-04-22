const rotatedString = (str1, str2) => {
  // rotated strings should have the same length but be different
  if(str1.length != str2.length || str1 == str2) {
    return false;
  }
  // one string should be present in the doubled version of the other
  let str1Doubled = str1+str1;
  if (str1Doubled.includes(str2)) {
    return true;
  }
  return false;
};

export { rotatedString };
