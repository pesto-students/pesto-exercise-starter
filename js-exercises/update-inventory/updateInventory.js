/* eslint-disable no-param-reassign */
const stringCompareFunction = (a, b) => {
  const itemA = a[1].toUpperCase();
  const itemB = b[1].toUpperCase();

  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  }
  return comparison;
};

const updateInventory = (arr1, arr2) => {
  arr2.forEach(secondArrElement => {
    const firstArrPosition = arr1
      .map(firstArrElement => firstArrElement[1])
      .indexOf(secondArrElement[1]);
    if (firstArrPosition === -1) arr1.push(secondArrElement);
    else arr1[firstArrPosition][0] += secondArrElement[0];
  });
  return arr1.sort(stringCompareFunction);
};

export { updateInventory };
