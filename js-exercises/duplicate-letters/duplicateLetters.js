
function duplicateLetters(args) {
  let count = 0;
  for (let i of args){
    let newCount = 0;
    for(let j of args){
      if (i==j) newCount++;
    }
    if (newCount > count) count = newCount;
  }
  if (count <= 1) return false
  else return count;
}

export {
  duplicateLetters,
};