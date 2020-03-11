
function lastIndexOf(...args) {
  const item = args[0];
  const list = [...args[1]];
  const keys = [];
  list.forEach((element, index) => {
    if (element === item) keys.push(index);
  });
  return keys.length > 0 ? Math.max(...keys) : -1;
}

export {
  lastIndexOf,
};
