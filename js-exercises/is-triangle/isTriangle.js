function isTriangle(side1, side2, side3) {
    if(side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      return false
    } else {
      return true
    }
}

export {
  isTriangle,
};
/*Author - Parvinder Singh Saluja
  Time taken - 7 Minutes
*/
