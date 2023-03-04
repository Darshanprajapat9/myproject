
  /* challenge time

  1: create a folder named it darshan 
  2: create s file in it named bio.txt  and data into it .
  3: add more data into the file at the end of the exiting data
  4:read tha data without getting the buffer data at first
  5: now deleted both fiile and the folder
  */

  const fs = require("fs");
//1: create a folder named it darshan 
     fs.mkdirSync('darshan');

  //2: create s file in it named bio.txt  and data into it .
  fs.writeFileSync('bio.text',' my name is darshan prajapat ');

//  3: add more data into the file at the end of the exiting data.
  fs.appendFileSync('bio.text','and i am currently study in computer engineering');

//4:read tha data without getting the buffer data at first

  const read = fs.readFileSync('bio.text');

  console.log(read);

//<Buffer 20 6d 79 20 6e 61 6d 65 20 69 73 20 64 61 72 73 68 61 6e 20 70 72 61 6a 61 70 61 74 20 61 
//6e 64 20 69 20 61 6d 20 63 75 72 72 65 6e 74 6c 79 20 73 74 ... 27 more bytes>

 original = read.toString();

 console.log(original);
// or
 const data = fs.readFileSync('bio.text' , 'utf-8');
 console.log(data);

//4:read tha data without getting the buffer data at first.

  fs.renameSync('bio.text','bio.html');

 //5: now deleted both fiile and the folder

 fs.unlinkSync('bio.html');

 fs.rmdirSync("darshan");
