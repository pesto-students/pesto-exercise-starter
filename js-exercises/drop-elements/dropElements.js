function dropElements(elements, predicate) {
  return elements.filter(element => predicate(element));
}

export { dropElements };
