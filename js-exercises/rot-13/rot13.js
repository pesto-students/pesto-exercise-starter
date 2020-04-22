function decodeRot13Character(character){

   let asciiCode = character.charCodeAt(0);

   if(asciiCode > 64 && asciiCode < 91){

    if(asciiCode < 78){
      asciiCode += 13;
    } else {
      asciiCode -= 77;
      asciiCode += 64;
    }

    return String.fromCharCode(asciiCode);

   } else {

     return character;

   }
}

function rot13(encodedString) {

  let encodedStringArray = encodedString.split(' '),
      decodedStringArray = [];

  for(let word of encodedStringArray){

    let decodedWord = '';

    for(let character of word){
      
      decodedWord += decodeRot13Character(character);

    }

    decodedStringArray.push(decodedWord);

  }

  return decodedStringArray.join(' ');
}

export {
  rot13,
};
