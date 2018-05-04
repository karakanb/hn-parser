const parser = require('./index')
const fs = require('fs');
const sampleData = fs.readFileSync('./hn.html');

var items = parser.parse(sampleData);

parser.parseAsync(sampleData, (items) => {
  fs.writeFile("./output.json", JSON.stringify(items, null, 4), function (err) {
    if (err) {
      return console.log(err);
    }
  
    console.log("The file was saved!");
  });
});



