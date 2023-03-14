const express = require('express');
const app =  express();

app.get('/',(req,res)=>{  //get is home page 
res.send("hello from the express page");    
  
  
}) ;

app.get('/about',(req,res)=>{
    res.send("hello from the about page");
    }) ;

app.listen(4000 ,()=>{
    console.log("listing the exprees pages");
})
//the clallback function has 2 parameter ,request (req) and respond(res).
//the request object (req) represent the http request and has parameter for the request querry string ,
//parameter ,body , Http header,etc.

//Similary the response object represnt rthe htto response.
// that the express app sends when it recives an http requrest.
