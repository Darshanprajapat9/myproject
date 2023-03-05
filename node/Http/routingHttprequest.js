const http = require('http);
                     
 const server = http.createserver((req,res)=>{
  
 // console.log(req.url);
 ^
 !---user konsa page search kar raha wo return kar raha he  
 if(req.url == './about'){
  res.end('about page open');
          }
    else
  if(req.url == './service'){
  res.end('service pages open');
          }
    else
           if(req.url == './contact'){
  res.end(' contact page is open');
          }
    else
         {
  res.end("404 error page');
          }
    else
          }) 
  
  server.listen(8000 ,'127.0.0.1',()=>{
    console.log("complated your server number 8000")});
                     
                     
                     
    
