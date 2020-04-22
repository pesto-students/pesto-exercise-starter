function updateInventory(...args) {
 
  if(args[0].length == 0   || args[1].length == 0)
   return [].concat(...args).sort(function(a,b) {
    	return a[1].localeCompare(b[1])
  });
  
 let store = [];
 for (let index = 0; index < args[0].length; index++) {
  for (let innerIndex = 0; innerIndex < args[1].length; innerIndex++) {
      if(args[0][index][1] === args[1][innerIndex][1]){
        store.push([args[0][index][0]+args[1][innerIndex][0],args[0][index][1]]);
        args[0].splice(index, 1);
        args[1].splice(innerIndex, 1);
      }
  } 
 }
  
  return store.concat(args[0], args[1]).sort(function(a,b) {
    return a[1].localeCompare(b[1])
});

}

export { updateInventory };
