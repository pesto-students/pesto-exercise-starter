const rotatedString = (str1, str2) => {
  let passedString = str1
    .split("")
    .reverse()
    .join("");
  if (passedString == str2) {
    return true;
  } else {
    return false;
  }
};

export { rotatedString };
