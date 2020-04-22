function diffArray(Array1, Array2) {

  const firstArray = Array1.filter(function(x) {
         return Array2.indexOf(x) < 0;
       });
  const secondArray = Array2.filter(function(x) {
        return Array1.indexOf(x) < 0;
      });


  return firstArray.concat(secondArray);
}

export {
  diffArray,
};
