function compareItems(item1,item2){
  if(item1[1] < item2[1]){
    return -1;
  } else if(item1[1] > item2[2]){
    return 1;
  } else {
    return 0;
  }
}

function updateInventory(currentInventory,newInventory) {
  
    let commonInventory = currentInventory.reduce((accumulator,currentItem) => {

      const sameItem = newInventory.filter((newItem,index) => {

          if(newItem[1] === currentItem[1]){

             newInventory.splice(index,1);
             return true;

          }

      });

      if(sameItem.length > 0){

        const newQuantity = currentItem[0] + sameItem[0][0];
        accumulator.push([newQuantity,currentItem[1]]);

      } else {

        accumulator.push(currentItem);

      }

      return accumulator;

    },[]);

    const updatedInventory = [...commonInventory,...newInventory];

    return updatedInventory.sort(compareItems);
}

//console.log(updateInventory(currentInv,newInv));

export {
  updateInventory,
};
