/* eslint-disable operator-linebreak */
const path = require('path');
const fs = require('fs');

const fileContent = fs.readFileSync(
  path.join(__dirname, 'dataset.json'),
  'utf-8'
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  return bankBalances.filter(balance => Number(balance.amount) > 100000);
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
    .reduce((a, b) => a + b, 0);
  return Number(result.toFixed(2));
}

function sumOfInterests() {
  const filteredBankBalances = bankBalances.filter(
    balance =>
      balance.state === 'WI' ||
      balance.state === 'IL' ||
      balance.state === 'WY' ||
      balance.state === 'OH' ||
      balance.state === 'GA' ||
      balance.state === 'DE'
  );
  const result = filteredBankBalances
    .map(balance => 0.18 * balance.amount)
    .reduce((a, b) => a + b, 0);
  return result.toFixed(2);
}

function higherStateSums() {
  const filteredArray = bankBalances.filter(
    balance => Number(balance.amount) > 1000000
  );
  return filteredArray
    .map(balance => balance.amount)
    .reduce((a, b) => a + b, 0);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
