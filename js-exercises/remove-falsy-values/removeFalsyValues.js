function removeFalsyValues(array) {

  let filteredArray = [];

  for(let value of array){

    if(value){
      filteredArray.push(value);
    }

  }

  return filteredArray;

}

export {
  removeFalsyValues,
};
