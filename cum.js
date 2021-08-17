const fs = require('fs')

console.log('hell begins');

var content = `
var num = 5;
console.log("starting, getting number " + num);
`;

console.log('writing');
fs.writeFile('./test.js', content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('done');
  //file written successfully
})

