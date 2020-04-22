function telephoneCheck(...args) {
  var PhoneNumber = args.toString()
  
  if (PhoneNumber.match(/[1-9]/g).length==11){return true}

  return false;
}

export { telephoneCheck };
