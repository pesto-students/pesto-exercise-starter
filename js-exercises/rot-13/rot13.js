function rot13(...args) {
  var alphabets = {}
  var positions = {}
  for(var i = 0; i< 26; i++){
    alphabets[String.fromCharCode(65+i)] = i
    positions[i] = String.fromCharCode(65+i)
  }

  var letters = args[0].split('')
  var decoded_message = ""
  for(var i =0; i<letters.length; i++){
    if(alphabets[letters[i]]  === undefined){
      decoded_message += letters[i]
    }else {
      var alphabet_position = alphabets[letters[i]]
      alphabet_position = alphabet_position-13
      if(alphabet_position<0){
        alphabet_position = 26 + alphabet_position
      }
      decoded_message += positions[alphabet_position]
    }
  }
  return decoded_message;
}

rot13('SERR PBQR PNZC!')

module.exports =  {
  rot13,
};
