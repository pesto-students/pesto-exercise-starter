function sumAll([firstNum, secondNum]) {
    const [ big, small ] = firstNum > secondNum ? [firstNum, secondNum] : [secondNum, firstNum]
    let sum = 0;
    for ( let num = small; num <= big; num++ ) {
        sum += num;
    }

    return sum;
}

export {
  sumAll,
};
