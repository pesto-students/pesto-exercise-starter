//code to find if given 3 sides, we can form a triangle or not
function isTriangle(side1,side2,side3) {
  return side1+side2>side3 && side1+side3>side2 && side2+side3>side1 ? true : false
}
export {
  isTriangle,
};
