function duplicateLetters(...args) {
  let str = args[0], map = new Map();

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (map.has(char))
      map.set(char, map.get(char)+1);
    else
      map.set(char, 1);
  }

  let max = 0;
  for (let value of map.values()) {
    if (value > max)
      max = value;
  }

  return (max > 1 ? max:false);
}

export {
  duplicateLetters,
};
