function lastIndexOf(...args) {

  let search = args[0],
      list = args[1];

  return list.lastIndexOf(search);
}

export {
  lastIndexOf,
};
