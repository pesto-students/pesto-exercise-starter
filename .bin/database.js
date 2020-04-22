const fs = require('fs').promises;
const path = require('path');
const data = require('./data.json');

const DB_FILE_NAME = 'data.json';

function getAllData() {
  return data;
}

function commitToDB(obj) {
  const filePath = path.join(__dirname, DB_FILE_NAME);
  const stringifiedData = JSON.stringify(obj);
  return fs.writeFile(filePath, stringifiedData, 'utf-8');
}

module.exports = {
  getAllData,
  commitToDB,
}