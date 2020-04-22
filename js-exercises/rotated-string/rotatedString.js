const rotatedString = (str1, str2) => {
  if (str1.length !== str2.length) throw new Error('Not a rotated string');
  if (str1 === str2) return false;

  const rotatedStringStartIndex = str1.indexOf(str2[0]);
  const convertedStr1 = str1.substring(rotatedStringStartIndex, str1.length) + str1.substring(0, rotatedStringStartIndex);
  return convertedStr1 === str2;
};

export { rotatedString };
