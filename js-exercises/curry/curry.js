/* eslint-disable */
const curry = (functionToCall, ...argsList) => {
  if (functionToCall.length <= argsList.length)
    return functionToCall(...argsList);
  return (...remainingArgs) => {
    return curry(functionToCall, ...argsList, ...remainingArgs);
  };
};

export { curry };
