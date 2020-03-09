function diffArray(arr1, arr2) {
  const s1 = new Set(arr1);
  const s2 = new Set(arr2);

  for (const item of s1) {
    if (s2.has(item)) {
      s2.delete(item);
      s1.delete(item);
    }
  }

  return [...Array.from(s1), ...Array.from(s2)];
}

export { diffArray };
