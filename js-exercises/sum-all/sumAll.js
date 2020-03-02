function sumAll(arg) {
  let smaller = arg[0];
  let larger;
  let sum = 0;
  if (arg[0] > arg[1]) {
    larger = arg[0];
    smaller = arg[1];
  } else {
    larger = arg[1];
    smaller = arg[0];
  }
  for (let i = smaller; i <= larger; i++) {
    sum = sum + i;
  }
  return sum;
}

export {
  sumAll,
};