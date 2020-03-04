const argsString = (message, args) => {
  args.forEach(individualArgument => {
    message = message.replace("{}", individualArgument);
  });
  return message;
};

export {
  argsString
};