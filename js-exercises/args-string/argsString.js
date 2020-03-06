const argsString = (message, args) => {
  let mes = message;
  for (let position = 0; message.indexOf('{}') > -1; position += 1) {
    mes = message.replace('{}', args[position]);
  }
  return mes;
};

export { argsString };
