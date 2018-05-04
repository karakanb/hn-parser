const parser = require('../index')
const fs = require('fs');

const sampleDataPath = './test_content/hn.html'
const expectedOutputPath = './test_content/expected_output.json'

const sampleData = fs.readFileSync(sampleDataPath);
const items = parser.parse(sampleData);
fs.writeFileSync(expectedOutputPath, JSON.stringify(items, null, 4));