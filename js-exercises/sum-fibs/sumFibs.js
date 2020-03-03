function fibSeries(n) {
  const series = [1];
  let f1 = 0;
  let f2 = 1;
  let f3;
  for (let i = 0; i <= n; i += 1) {
    f3 = f1 + f2;
    if (f3 > n) break;
    series.push(f3);
    f1 = f2;
    f2 = f3;
  }
  return series;
}

function sumFibs(n) {
  const series = fibSeries(n);
  return series.filter(i => i % 2 !== 0).reduce((acc, i) => acc + i);
}


export {
  sumFibs,
};
