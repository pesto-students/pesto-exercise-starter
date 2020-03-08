function balancedBraces(code) {
  let stack = [];
  let matchMap = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  for (let letter of code) {
    switch (letter) {
      case "{":
      case "(":
      case "[":
        stack.push(letter);
        break;
      case "}":
      case ")":
      case "]": {
        let stackTop = stack[stack.length - 1];
        if (matchMap[stackTop] === letter) {
          stack.pop();
        }
        break;
      }
      case "default":
        null;
    }
  }
  return stack.length ? false : true;
}

export { balancedBraces };
