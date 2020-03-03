
function duplicateLetters(args) {
  let uniuqeObj = {};
  let duplicate  = 0;
  for (let i = 0; i < args.length; i += 1) {
    if (uniuqeObj[args[i]]) {
      uniuqeObj[args[i]] += 1
      if(duplicate < uniuqeObj[args[i]]) {
        duplicate = uniuqeObj[args[i]];
      }
    } else {
      uniuqeObj[args[i]] = 1;
    }
  }
  if (duplicate < 2) {
    return false;
  } else {
    return duplicate;
  }
    
}

export {
  duplicateLetters,
};
