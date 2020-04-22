const makeObjectFromEntries = arr => Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v }))); // Object.fromEntries is not supported;
const toEntries = Object.entries;
const map = mapFn => data => data.map(mapFn);
const swap = map(([i, j]) => [j, i]);

const compose = (...fns) => x => fns.reduce((v, f) => f(v), x);


function objectInvert(obj) {
  return compose(
    toEntries,
    swap,
    makeObjectFromEntries,
  )(obj);
}


export {
  objectInvert,
};
