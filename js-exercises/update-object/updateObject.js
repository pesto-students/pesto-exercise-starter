function updateObject(...args) {
  if (args === undefined || args.length !== 3) {
    return [];
  }
  const counter = args[0];
  const replaceItem = args[1];
  const givenArray = args[2];
  if (givenArray.length < 0) {
    return [];
  }
  let roundOfCount = counter % givenArray.length;
  if (roundOfCount < 0) {
    roundOfCount += givenArray.length;
  }
  givenArray[roundOfCount] = replaceItem;
  return givenArray;
}
export {
  updateObject,
};
