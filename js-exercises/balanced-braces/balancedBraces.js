
function balancedBraces(...args) {
  const input = args[0];
  // eslint-disable-next-line camelcase
  const braces_stack = [];
  // eslint-disable-next-line vars-on-top
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '[' || input[i] === '{' || input[i] === '(') {
      braces_stack.push(input[i]);
    } else {
      if (input[i] === ']') {
        if (braces_stack[braces_stack.length - 1] === '[') {
          braces_stack.pop();
        } else {
          return false;
        }
      }

      if (input[i] === '}') {
        if (braces_stack[braces_stack.length - 1] === '{') {
          braces_stack.pop();
        } else {
          return false;
        }
      }

      if (input[i] === ')') {
        if (braces_stack[braces_stack.length - 1] === '(') {
          braces_stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  if (braces_stack.length === 0) {
    return true;
  }
  return false;
}

export {
  balancedBraces,
};
