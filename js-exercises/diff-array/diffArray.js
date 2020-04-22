function diffArray(arr1,arr2) {

  var resultArr = []

  arr1.forEach(function(element) {
    if(arr2.indexOf(element)<0)
    {
      resultArr.push(element)
    }
    
  });


  arr2.forEach(function(element) {
    if(arr1.indexOf(element)<0)
    {
      resultArr.push(element)
    }
    
  });
  
  return resultArr

}

export {
  diffArray,
};
