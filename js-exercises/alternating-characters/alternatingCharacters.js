function alternatingCharacters(...arr) {
  let deleteCount = 0;
  let store = [];
  arr[0].forEach((element) => {
    for(let i = 0; i < element.length; i++){
      if(element[i] === element[i+1]){
         deleteCount++;
       }
    }
    store.push(deleteCount);
    deleteCount = 0;
  });
  return store;
}
 export { alternatingCharacters };
