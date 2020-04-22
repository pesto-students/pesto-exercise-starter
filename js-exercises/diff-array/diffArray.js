function diffArray(array1,array2) {

    let arr1 = [],
        arr2 = [],
        swappedArray = false;

    if(array1.length > array2.length){
        swappedArray = true;
        arr1 = array2;
        arr2 = array1;
    } else {
        arr1 = array1;
        arr2 = array2;
    }

    for(let i = 0 ; i < arr1.length ; ){

      let duplicate = false;

      for(let j = 0 ; j < arr2.length ; ){

        if(arr1[i] === arr2[j]){

          arr1.splice(arr1.indexOf(arr1[i]),1);
          arr2.splice(arr2.indexOf(arr2[j]),1);

          i = 0;
          j = 0;

          duplicate = true;

          break;

        } else {
          j++;
        }

      }

      if(!duplicate){
        i++;  
      }
        
    }

    if(swappedArray){
      return [...arr2,...arr1];
    } else {
      return [...arr1,...arr2];
    }
  
}

export {
  diffArray,
};
