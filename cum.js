const fs = require('fs')

console.log('hell begins');

var content = ``;

content += `if (num == 0) {
    return true;
}`

var i = 1;

console.log("creating");

while (i < 100000) {
    content += ` else if (num == ${i}) {
        return ${i % 2 == 0 ? true : false};
    }`;
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

