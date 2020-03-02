function isTriangle(...args) {
  // is the number of lines are less tahn 3, retrun false
  // because no triangle can be formed with less than 3 lines
  if (args.length < 3) {
    return false;
  }
  /**
   * A triangle is valid if sum of any two sides are greater than 3rd side
   */

  let result = true;
  args.forEach((val, index) => {
    const isValidTriangle = val < (args[(index + 1) % 3] + args[(index + 2) % 3]);
    if (!isValidTriangle) {
      result = false;
    }
  });
  return result;
}
export {
  isTriangle,
};
