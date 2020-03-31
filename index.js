const fs = require('fs');
const jsonData = require('./country.full.json');
const minList=jsonData.map(i=> {return {code: i.code,native: i.native,name: i.name}}); 
fs.writeFileSync('./country.hu.json', JSON.stringify(minList));