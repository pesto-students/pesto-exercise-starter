function isTriangle(x,y,z) {

  if(x>0 &&y>0 &&z>0)
  if(x+y<=z || y+z<=x||z+x<=y)
  {
    return false
  }
  return true;
}

export {
  isTriangle,
};
