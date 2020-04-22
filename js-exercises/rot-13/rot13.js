function rot13(args) {
  let rot13InputLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let rot13OutputLetters = "NOPQRSTUVWXYZABCDEFGHIJKLM".split('');
  let rot13DecodeLetter = (x) =>{
    //we need to locate our letter in the rot13InputLetters array;
    let inputLetterIndex = rot13InputLetters.indexOf(x);
    //let's decode the alphabets and the alphabets only
    return inputLetterIndex > -1  ? rot13OutputLetters[inputLetterIndex] : x;
  }
  return args.split('').map(rot13DecodeLetter).join('');
}

export {
  rot13,
};
