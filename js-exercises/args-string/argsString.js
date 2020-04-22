const argsString = (message, args) => {
  let result = message;
  for (let i = 0; message.indexOf('{}') > -1; i++) {
    result = message.replace('{}', args[i]);
  }
  return result;
};
export { argsString };
