
function duplicateLetters(arg) {
  const arr = arg.split('');
  const s = [...new Set(arr)];

  if (s.length === arr.length) return false;

  const counts = arr.reduce((acc, value) => ({
    ...acc,
    [value]: (acc[value] || 0) + 1,
  }), {});

  return Math.max(...Object.values(counts));
}

export {
  duplicateLetters,
};
