function sumAll(arr) {
  let [num1, num2] = arr
  let sum = 0
  const min = Math.min(num1, num2)
  const max = Math.max(num1, num2)

  sum = (max - min + 1) * (max + min) / 2
  
  return sum
}

export {
  sumAll,
};
