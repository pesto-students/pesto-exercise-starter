const rotatedString = (string1, string2) => {
  if (string1.length !== string2.length || string1 === string2) return false;
  return ((string1 + string1)).includes(string2);
};

export { rotatedString };
