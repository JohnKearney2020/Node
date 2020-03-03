const fs = require('fs');
let buffer = fs.readFileSync(process.argv[2]);
buffer = buffer.toString();
let numberOfNewLines = buffer.split('\n');
console.log(numberOfNewLines.length - 1);
