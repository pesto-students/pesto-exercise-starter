const animalSort = animals => {
  if (!Array.isArray(animals)) {
    return animals;
  }

  if (animals.length === 0) {
    return [];
  }

  return animals.sort((currentAnimal, nextAnimal) => {
    // Sort by number of legs
    if (currentAnimal.numberOfLegs > nextAnimal.numberOfLegs) return 1;
    if (currentAnimal.numberOfLegs < nextAnimal.numberOfLegs) return -1;

    // Sort by name when number of legs are same
    if (currentAnimal.name >= nextAnimal.name) return 1;
    return -1;
  });
};

export { animalSort };
