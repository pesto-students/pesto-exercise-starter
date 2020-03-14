function dropElements(elements, predicate) {
   return  elements.filter(el => predicate(el) === true );
  
}

export { dropElements };
