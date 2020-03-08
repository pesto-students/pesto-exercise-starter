function isTriangle(sideFirst, sideSecond, sideThird) {
  return (
    sideFirst + sideSecond > sideThird
    && sideFirst + sideThird > sideSecond
    && sideSecond + sideThird > sideFirst
  );
}

export { isTriangle };
