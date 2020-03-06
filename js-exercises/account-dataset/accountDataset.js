const path = require("path");
const fs = require("fs");
import { sqrt,pow,round } from 'mathjs'

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {

  var result = bankBalances.filter(function (el) {
    return el.amount >= 100000 ;
  });
  return result;
}

function datasetWithRoundedDollar() {
  bankBalances.forEach(function (element) {
    element.rounded = Math.round(element.rounded);
  });
  return bankBalances;
}

function sumOfBankBalances() {
  let store = [];
  store[0] = 0;
  bankBalances.forEach(function (element) {
    store[0] = element.amount + store[0] ;
  });
  return store[0];
}

function sumOfInterests() {
  let store = [];
  store[0] = 0;
  let useStates = ['WI','WY','IL','OH','GA','DE'];
  let  calculateInterest = function(arg1){
    let totalAmount = arg1 +Math.round(arg1*18.9/100);
    return totalAmount;
  }
  bankBalances.forEach(function (element) {
    if(useStates.indexOf(element.state) !== -1){
      let interest =  calculateInterest(element.amount);
      store[0] = store[0] + interest ;
    }
    return store[0] ;
  });

}

function higherStateSums() {

      let states = [];
      let store = [];
      let totalAmount = [];
      totalAmount[0] = 0;
      store[0] = 0;
      let storeStates = function(arg1){
        if(states.indexOf(arg1)!= -1){
          states.push(arg1);
        }
      }

      bankBalances.forEach(function (element) {
        storeStates(element.state);
      });

      for(let i=0;i< states.length;i++){

        var statesData = bankBalances.filter(function (el) {
          return el.state === states[i] ;
        });

        statesData.forEach(function (element) {
            store[0] = element.amount + store[0] ;
        });

        if(store[0] >1000000){
          totalAmount[0]  = store[0] + totalAmount[0];
        }
      }

    return totalAmount[0];
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
