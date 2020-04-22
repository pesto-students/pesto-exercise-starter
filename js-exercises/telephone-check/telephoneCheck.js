const US_PHONE_REGEX = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/

const telephoneCheck = (phoneNumber) => US_PHONE_REGEX.test(phoneNumber)

export { telephoneCheck };
