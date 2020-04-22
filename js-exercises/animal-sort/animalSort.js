function sortAnimalsByNumberOfLegs(animal1,animal2){

  if(animal1.numberOfLegs < animal2.numberOfLegs){
    return -1;
  } else if(animal1.numberOfLegs > animal2.numberOfLegs){
    return 1;
  } else {
    return 0;
  }

} 

function sortAnimalsByName(animal1,animal2){

  if(animal1.name < animal2.name){
    return -1;
  } else if(animal1.name > animal2.name){
    return 1;
  } else {
    return 0;
  }
  
} 

function groupAnimalsByNumberOfLegs(animals){

  return animals.reduce((accumulator,animal) => {

    let key = animal.numberOfLegs;

    if(!accumulator[key]){
      accumulator[key] = [];
    }

    accumulator[key].push(animal);

    return accumulator;

  },{});
}

const animalSort = animals => {

   let sortByNumberOfLegs = animals.sort(sortAnimalsByNumberOfLegs);

   let groupByNumberOfLegs = groupAnimalsByNumberOfLegs(sortByNumberOfLegs);

   let sortByName = [];

   for(let key in groupByNumberOfLegs){
    sortByName.push(groupByNumberOfLegs[key].sort(sortAnimalsByName));
   }

   return sortByName.flat();

};

export { animalSort };
