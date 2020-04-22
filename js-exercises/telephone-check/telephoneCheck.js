function telephoneCheck(args) {
  const formate = ['5555555555','15555555555'];
  return formate.includes(args.replace(/[- \s )(]/g,''));
}

export { telephoneCheck };
