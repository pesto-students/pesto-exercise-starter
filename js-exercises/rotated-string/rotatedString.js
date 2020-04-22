const isRotated = (string1, string2) => (
  ( string1.length === string2.length ) &&
  ( string1 !== string2 ) &&
  ( (string1 + string1).indexOf(string2) !== -1 )
)

const rotatedString = (string1, string2) => isRotated(string1, string2)

export { rotatedString };
