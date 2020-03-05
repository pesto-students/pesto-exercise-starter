const REPLACE_LITERAL = '{}'

const replaceSnippetWithFirstMatch = (inputString, stringToReplace, stringToReplaceWith) => inputString.replace(stringToReplace, stringToReplaceWith)

const argsString = (message, argumentsArray) => {
  const argumentsArrayLength = argumentsArray.length
  let replacedWithArgumentsMessage = message
  
  for (let i = 0; i < argumentsArrayLength; ++i) {
    replacedWithArgumentsMessage = replaceSnippetWithFirstMatch(replacedWithArgumentsMessage, REPLACE_LITERAL, argumentsArray[i])
  }

  return replacedWithArgumentsMessage
};

export { argsString };
