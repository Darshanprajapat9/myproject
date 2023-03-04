const fs = require("fs");

fs.writeFile('App.js','today is awesome day',(err)=>{
  console.log("file is created");
  console.log(err);
});

fs.appendFile('App.js','this is async function',(err)=>{
 console.log('task complted')
});

fs.readFile('App.js','utf-8',(err ,data)=>{
  console.log(data);})

  fs.rename('app.js','App.js',(err)=>{
    console.log("complted change file");
  })

  fs.unlink('App.js',(err)=>{
    console.log("complted DELETE");
  })
  

  /* challenge time

  1: create a folder named it darshan 
  2: create s file in it named bio.txt  and data into it .
  3: add more data into the file at the end of the exiting data
  4:read tha data without getting the buffer data at first
  5: now deleted both fiile and the folder
  */


 //async module

 const fs =require("fs");

   fs.mkdir('darshan',(err)=>{
   console.log ("created folder");
   });

   fs.appendFile('bio.text','i am currently computer engineering',(err)=>{
    console.log('add the imformation');
   })

   fs.readFile('bio.text','utf-8',(err,data)=>{
    console.log(data);
   })

   fs.rename('bio.text','bio.html',(err)=>{
    console.log('change the file');
   })

   fs.unlink('bio.html',(err)=>{
    console.log("delete file");
   });

   fs.rmdir('bio.html',(err)=>{
     console.log('delete folder');
   });
  
