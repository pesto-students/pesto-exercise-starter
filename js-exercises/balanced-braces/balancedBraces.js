
function balancedBraces(...args) {
  var input = args[0]
  var braces_stack = []
  for (var i = 0; i < input.length; i++) {
    if (input[i] === '[' || input[i] === '{' || input[i] === '(') {
      braces_stack.push(input[i])
    } else {
      if (input[i] === ']') {
        if (braces_stack[braces_stack.length - 1] === '[') {
          braces_stack.pop();
        } else {
          console.log(braces_stack);
          return false
        }
      }

      if (input[i] === '}') {
        if (braces_stack[braces_stack.length - 1] === '{') {
          braces_stack.pop();
        } else {
          console.log(braces_stack);
          return false
        }
      }

      if (input[i] === ')') {
        if (braces_stack[braces_stack.length - 1] === '(') {
          braces_stack.pop();
        } else {
          console.log(braces_stack);
          return false
        }
      }

    }
  }
  if (braces_stack.length === 0) {
    return true
  }
 
  
  return false;
}
console.log(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}'));

export {
  balancedBraces,
};
