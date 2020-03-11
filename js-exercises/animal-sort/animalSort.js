const animalSort = animals => {
  	return animals.sort((a,b) =>  a['numberOfLegs']-b['numberOfLegs'] || a['name'].localeCompare(b['name']));
};


export { animalSort };
