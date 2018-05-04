const parser = require('./index')
const fs = require('fs');

const sampleData = fs.readFileSync('./hn.html');
const items = parser.parse(sampleData);
fs.writeFileSync('./test_output.json', JSON.stringify(items, null, 4));