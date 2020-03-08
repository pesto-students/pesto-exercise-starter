function updateInventory(...args) {
  const inventory = args[0];
  const inventoryPatch = args[1];
  inventoryPatch.forEach(itemPatch => {
    let itemExists = false;
    for (let i = 0; i < inventory.length; ++i) {
      if (inventory[i][1] === itemPatch[1]) {
        inventory[i][0] += itemPatch[0];
        itemExists = true;
        break;
      }
    }
    if (!itemExists) {
      inventory.push(itemPatch);
    }
  });

  inventory.sort((currentItem, nextItem) => {
    if (currentItem[1] >= nextItem[1]) return 1;
    return -1;
  });
  return inventory;
}

export {
  updateInventory,
};
