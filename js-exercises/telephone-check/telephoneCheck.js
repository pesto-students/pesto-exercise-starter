function telephoneCheck(phoneNumber) {
  const validUSPhoneNumberPattern = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/
  return phoneNumber.length >= 10 && validUSPhoneNumberPattern.test(phoneNumber);
}

export { telephoneCheck };
