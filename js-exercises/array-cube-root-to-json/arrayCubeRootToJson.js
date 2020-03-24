const arrayCubeRootToJson = arr => {
  const isArray = Array.isArray(arr);
  if (!isArray) {
    throw new TypeError(`expected array got ${typeof arr}`);
  }

  const inputArr = arr.filter((element) => element);
  const arrayHasElement = inputArr.length > 0;

  if (!arrayHasElement) {
    throw new Error('array has no valid elemet');
  }
  const obj = {};

  for (const element of inputArr) {
    if (typeof element !== 'number') {
      throw new TypeError(`expected element to be number, got ${typeof element}`);
    } else {
      const cubeRoot = Math.cbrt(element);
      obj[`${element}`] = cubeRoot;
    }
  }
  return obj;
};

export { arrayCubeRootToJson };
