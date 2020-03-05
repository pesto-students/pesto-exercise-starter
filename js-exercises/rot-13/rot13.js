const START_ALPHABET_ASCII = 65
const END_ALPHABET_ASCII = 90
const ROTATE_VALUE = 13
const NUMBER_OF_LETTERS_IN_ALPHABET = 26

const isValidCharacter = character => character.charCodeAt() >= START_ALPHABET_ASCII && character.charCodeAt() <= END_ALPHABET_ASCII

const rotateCharacter = character => String.fromCharCode(
  ((character.charCodeAt() - START_ALPHABET_ASCII + ROTATE_VALUE) % NUMBER_OF_LETTERS_IN_ALPHABET) + START_ALPHABET_ASCII
)

function rot13(inputString) {
  let rot13String = ''

  for (let character of inputString) {
    if (isValidCharacter(character)) {
      character = rotateCharacter(character)
    }
    rot13String += character
  }

  return rot13String
}

export {
  rot13,
};
