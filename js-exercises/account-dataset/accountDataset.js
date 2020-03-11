const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  let arr=[];
  bankBalances.map((value)=>{
    if(parseFloat(value.amount)>100000){
      arr.push(value)
    }
  })
  return arr;
}

function datasetWithRoundedDollar() {
  let arr=[]
    bankBalances.map((value)=>{
      value.rounded=Math.round(value.amount)
      arr.push(value)
  
  })
  return arr;
}

function sumOfBankBalances() {
  let sum=0;
   bankBalances.map((value)=>{
    sum=sum+ parseFloat(value.amount); 
  })
    return parseFloat(sum.toFixed(2));
}

function sumOfInterests() {
  
}

function higherStateSums() {}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
