const rotatedString = (str1, str2) => {
  if (str1 === str2 || str1.length !== str2.length) return false;
  return (str1 + str1).indexOf(str2) > -1;
};

export { rotatedString };
