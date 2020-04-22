const allPromises = (args) => new Promise((resolve, reject) => {
  const results = [];
  let completed = 0;
  if (args === undefined) {
    reject(results);
  }
  args.forEach((value, index) => {
    Promise.resolve(value).then(result => {
      results[index] = result;
      completed += 1;
      if (completed === args.length) {
        resolve(results);
      }
    }).catch(err => reject(err));
  });
});

export { allPromises };
