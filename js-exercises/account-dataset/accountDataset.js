const path = require('path');
const fs = require('fs');

const fileContent = fs.readFileSync(
  path.join(__dirname, 'dataset.json'),
  'utf-8',
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  return bankBalances.filter(element => parseFloat(element.amount) > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(element => {
    const newObject = { ...element };
    newObject.rounded = Math.round(element.amount);
    return newObject;
  });
}

function sumOfBankBalances() {
  let sumOfAllAccounts = 0;
  for (let i = 0; i < bankBalances.length; i += 1) {
    sumOfAllAccounts += Math.round(parseFloat(bankBalances[i].amount * 100)) / 100;
  }
  return Math.round(sumOfAllAccounts * 100) / 100;
}

function sumOfInterests() {
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  let sumOfIntrestsObj = 0;
  for (let i = 0; i < bankBalances.length; i += 1) {
    if (states.includes(bankBalances[i].state)) {
      sumOfIntrestsObj += Math.round(parseFloat(bankBalances[i].amount * 18.9)) / 100;
    }
  }
  return Math.round(sumOfIntrestsObj * 100) / 100;
}

function higherStateSums() {
  const arrayOfStates = [];
  for (let i = 0; i < bankBalances.length; i += 1) {
    if (arrayOfStates.some(element => element.state === bankBalances[i].state)) {
      const index = arrayOfStates.findIndex(element => element.state === bankBalances[i].state);
      arrayOfStates[index].amount += parseFloat(bankBalances[i].amount);
    } else {
      // const newObj = [...bankBalances[i]];
      arrayOfStates.push(
        {
          state: bankBalances[i].state,
          amount: parseFloat(bankBalances[i].amount),
        },
      );
    }
  }
  arrayOfStates.filter(ele => {
    console.log(ele);
    return ele.amount > 1000000;
  });
  let sumOfstates = 0;
  for (let i = 0; i < arrayOfStates.length; i += 1) {
    sumOfstates += arrayOfStates[i].amount;
  }
  return sumOfstates;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
