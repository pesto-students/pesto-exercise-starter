const argsString = (message, args) => {
  return function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [message[0]];
    args.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, message[i + 1]);
    });
    return result.join("");
  };
};

export { argsString };
