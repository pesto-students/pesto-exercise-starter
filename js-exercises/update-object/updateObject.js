
const isValidType = (expectedType, input) => {
  const type = typeof input;
  return type === expectedType;
};

function updateObject(...args) {
  if (args.length < 3) {
    throw new Error(`expected 3 arguments , got ${args.length}`);
  }

  const isNumber = isValidType('number', args[0]);
  if (!isNumber) {
    throw new Error(`expected  update at index to be number , got ${typeof args[0]}`);
  }

  const isArray = Array.isArray(args[2]);
  if (!isArray) {
    throw new Error(`expected array , got ${typeof args[2]}`);
  }

  const updateAtIndex = args[0];
  const newElement = args[1];
  const inputArr = args[2].map(element => element);
  inputArr.splice(updateAtIndex, 1, newElement);
  return inputArr;
}
export {
  updateObject,
};
