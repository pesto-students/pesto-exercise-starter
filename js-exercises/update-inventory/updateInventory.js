function updateInventory(...args) {
  const inventoryList = args[0];
  const suppliesList = args[1];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < suppliesList.length; i++) {
    let matchFound = false;
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < inventoryList.length; j++) {
      if (inventoryList[j][1] === suppliesList[i][1]) {
        matchFound = true;
        inventoryList[j][0] += suppliesList[i][0];
        break;
      }
    }
    // eslint-disable-next-line no-use-before-define
    if (!matchFound) insertSupply(i);
  }

  function insertSupply(position) {
    let inserted = false;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < inventoryList.length; i++) {
      if (suppliesList[position][1] < inventoryList[i][1]) {
        inserted = true;
        inventoryList.splice(i, 0, suppliesList[position]);
        break;
      }
    }
    if (!inserted) {
      inventoryList.push(suppliesList[position]);
    }
  }

  return inventoryList;
}

export {
  updateInventory,
};
