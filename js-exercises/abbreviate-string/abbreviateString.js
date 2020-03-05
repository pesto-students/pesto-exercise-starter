//import { isString } from "util";
//not using isString as it is giving me `SyntaxError: Cannot use import statement outside a module` error
function abbreviateString(str) {
  if (typeof (Str) !== 'string') {
    try {
      throw "no String found"
    } catch (error) {

    }
  }
  var last_space_index = str.lastIndexOf(' ')
  var first_space_index = str.indexOf(' ')
  var first_word = str.substring(0, first_space_index)
  var last_character = str.substring(last_space_index + 1, last_space_index + 2)
  var abbriviated_string = first_word + ' ' + last_character.toUpperCase() + '.'
  return abbriviated_string;
}

// abbreviateString("vfdgfr sdssfwe sfgs")


module.exports = { abbreviateString };
