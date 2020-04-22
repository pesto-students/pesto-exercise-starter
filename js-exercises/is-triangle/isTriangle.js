function isTriangle(...args) {
  let [a, b, c] = args;

  if ((a > b) && (a > c)) { 
    return isPossible(a, b, c);
  }
  else if((b > c)&&(b > a)) {
    return isPossible(b, a, c);
  }
  else if((c > a)&&(c > b)) {
    return isPossible(c, a, b);
  }
  return false;


}

function isPossible(large, sm1, sm2) {
  let rv = false;
  if (sm1 + sm2 > large) {
    rv = true;
  }
  return rv;
}

export {
  isTriangle,
};
