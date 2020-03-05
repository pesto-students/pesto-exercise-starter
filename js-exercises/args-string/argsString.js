const INTERPOLATION_LITERAL = "{}"

const argsString = (message, variables) => {
  for(let index = 0; index < message.split(INTERPOLATION_LITERAL).length; index++) {
    message = message.replace(INTERPOLATION_LITERAL, variables[index])
  }
  return message
};

export { argsString };
