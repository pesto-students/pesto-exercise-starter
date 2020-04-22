function sumAll([min, max]) {
  return Array.from({ length: max - min + 1 }, (v, k) => k + 1).reduce(
    (a, b) => a + b
  );
}

export { sumAll };
