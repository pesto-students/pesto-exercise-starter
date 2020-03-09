function telephoneCheck(inputStr = '') {
  const phoneNumberRegex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/;
  return !!inputStr.match(phoneNumberRegex);
}

export { telephoneCheck };
