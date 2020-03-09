const animalSort = animals => { 
  return animals.sort(compare)
};

const compare = (item_1, item_2) => {
  let comparison = 1
  if (item_1.numberOfLegs > item_2.numberOfLegs) {
    comparison = 1
  } else if (item_1.numberOfLegs === item_2.numberOfLegs) {
    if (item_1.name > item_2.name) {
      comparison = 1
    } else {
      comparison = -1
    }
  }
  else {
    comparison = -1
  }
  return comparison;
}

const arr = [
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Bird', numberOfLegs: 2 },
  { name: 'Snake', numberOfLegs: 0 },
];

console.log(animalSort(arr));



 export { animalSort };
