/* eslint-disable operator-linebreak */
const path = require('path');
const fs = require('fs');

const fileContent = fs.readFileSync(
  path.join(__dirname, 'dataset.json'),
  'utf-8'
);

const { bankBalances } = JSON.parse(fileContent);
const MINIMUM_BALANCE_REQUIRED = 100000;

const sumFunction = (a, b) => a + b;

function hundredThousandairs() {
  return bankBalances.filter(
    balance => Number(balance.amount) > MINIMUM_BALANCE_REQUIRED
  );
}

function datasetWithRoundedDollar() {
  return bankBalances.map(balance => {
    balance.rounded = Math.round(balance.amount);
    return balance;
  });
}

function sumOfBankBalances() {
  const result = bankBalances
    .map(balance => Number(balance.amount))
    .reduce(sumFunction, 0);
  return Number(result.toFixed(2));
}

function sumOfInterests() {
  const sumOfInterest = bankBalances
    .filter(
      account =>
        account.state === 'WI' ||
        account.state === 'IL' ||
        account.state === 'WY' ||
        account.state === 'OH' ||
        account.state === 'GA' ||
        account.state === 'DE'
    )
    .map(({ amount }) => Math.round(Number(amount) * 18.9) / 100)
    .reduce(sumFunction, 0);
  return +sumOfInterest.toFixed(2);
}

function higherStateSums() {
  const stateAmountObj = {};
  bankBalances.forEach(account => {
    stateAmountObj[account.state] = stateAmountObj[account.state]
      ? stateAmountObj[account.state] + Number(account.amount)
      : +account.amount;
  });
  return Object.values(stateAmountObj)
    .filter(amount => amount >= 1000000)
    .reduce(sumFunction, 0);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
