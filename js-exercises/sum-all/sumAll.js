function sumAll([a, b]) {
  const total = { value: 0 };
  if (Math.min(a, b) === Math.max(a, b)) return a + b;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i += 1) {
    total.value += i;
  }
  return total.value;
}

export { sumAll };
