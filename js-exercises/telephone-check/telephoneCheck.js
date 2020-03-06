function telephoneCheck(...args) {
  const phoneNo = args[0];
  const phoneNoRegex = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;
  return phoneNoRegex.test(phoneNo);
}

export { telephoneCheck };
