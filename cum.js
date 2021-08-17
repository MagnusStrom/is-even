const fs = require('fs')

console.log('hell begins');

var content = `
var num = 5;
console.log("starting, getting number " + num);
`;

var i = 0;

while (i < 100000) {
    content += `
    ${i == 0 ? "" : "else" } if (num == ${i}) {
        console.log('number is ${i % 2 == 0 ? "even" : "odd"}');
    }`
    i++;
  }

console.log('writing');
fs.writeFile('./index.js', content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('done');
  //file written successfully
})

