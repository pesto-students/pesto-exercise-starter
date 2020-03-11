function telephoneCheck(telephoneNumber) {
  return /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(telephoneNumber);
}

export {
  telephoneCheck
};
