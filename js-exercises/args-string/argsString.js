const argsString = (message = '', args = []) => {
  if (message.includes('{}')) {
    for (let i = 0; i < args.length; i++) {
      // eslint-disable-next-line no-param-reassign
      message = message.replace('{}', args[i]);
    }
  }
  return message;
};

export { argsString };
