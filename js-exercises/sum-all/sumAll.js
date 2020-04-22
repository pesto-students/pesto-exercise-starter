function sumAll([a,b]) {
  let sum = 0
  /*
  Using Arithmetuc Progression Formulae 
  Sum = (firstTerm + lastTerm) * n /2 
  */
  if(a === b) {
    return a + b
  }
  let numberofTerms = Math.max(a,b) - Math.min(a,b) + 1
  let sumOfExtermes = a + b  
  return sumOfExtermes * (numberofTerms /2)
  /* for(let i = startingPoint ; i <= endingPoint ; i++) {
  //   sum = sum + i 
  // */
}

/* 
Time taken -15 mins (For both approaches)
*/

export {
  sumAll,
};
