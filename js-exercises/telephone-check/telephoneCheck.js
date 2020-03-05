function telephoneCheck(telephoneNumber) {
  const telephoneCheckRegex = /^(1-?|1 ?)?(\([0-9]{3}\)|[0-9]{3})[ |-]?[0-9]{3}[ |-]?[0-9]{4}$/;
  return telephoneCheckRegex.test(telephoneNumber);
}

export {
  telephoneCheck
};