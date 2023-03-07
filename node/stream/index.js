
//2nd way
//rading from a stream
// create a readable stream
//Handle stream evenrts-->data ,end, and error


const fs = require('fs');
const http = require('http');


const server = http.createServer();
server.on('request' ,(req,res)=>{

const rstream = fs.createReadStream('input.text');
  
  rstream.on('data',(chunkdata)=>{
    res.write(chunkdata);
        });

  rstream.on('end',()=>{
  res.end();
     });
   });
server.listen(8000,'127.0.0.1');
