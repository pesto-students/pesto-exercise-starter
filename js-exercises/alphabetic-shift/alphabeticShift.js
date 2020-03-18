
const alphabeticShift = input => input.split('').map(letter => String.fromCharCode(letter.charCodeAt() + 1)).join('');

export { alphabeticShift };
