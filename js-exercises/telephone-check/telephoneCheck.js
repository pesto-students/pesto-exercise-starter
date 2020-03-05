function telephoneCheck(...args) {
  const telePhoneNumberString = args[0].trim();
  const americanNumberReg = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\\-]?[\0-9]{3}[\s\\-]?[0-9]{4}$/.test(telePhoneNumberString);
  return americanNumberReg;
}

export { telephoneCheck };
