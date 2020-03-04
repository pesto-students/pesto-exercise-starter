const tempCurry = (expectedArgslength, cb, ...values) => (...next) => {
  if (values.length >= expectedArgslength - 1) {
    return cb(...values, ...next);
  }
  return tempCurry(expectedArgslength, cb, ...values, ...next);
};


function curry(cb) {
  const expectedArgsLength = cb.length;
  return tempCurry(expectedArgsLength, cb);
}

export {
  curry,
};
