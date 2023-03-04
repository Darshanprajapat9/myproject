there are Sync types

const fs = require("fs");

fs.writeFileSync('App.js' ,'wel come to my chanel');

fs.writeFileSync('App.js' ,'wel come to my chanel i am learn to node');

fs.appendFileSync('App.js' , 'hello guys , how are you ,i am  fine also what about you');
//add to line or text

const read = fs.readFileSync('App.js');
 //read your file 

// console.log(read);

// <Buffer 77 65 6c 20 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 65 6c 20 69 20 61 6d 20 6c 65 61 72 6e 20 74 6f 20 6e 6f 64 65 68 65 6c 6c 6f 20 67 75 79 73 ... 46 more bytes>

org_data = read.toString();
// convert buffer to string

console.log(org_data);

//rename the file
  const rename =fs.renameSync('app.js' ,'App.js');
  console.log(rename);
