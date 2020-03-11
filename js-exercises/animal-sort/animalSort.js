const animalSort = animals => animals.sort((animal1, animal2) => {
  if (animal1.numberOfLegs === animal2.numberOfLegs) {
    return animal1.name.localeCompare(animal2.name);
  }
  return animal1.numberOfLegs - animal2.numberOfLegs;
});

export { animalSort };
