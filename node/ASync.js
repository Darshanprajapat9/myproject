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
  
