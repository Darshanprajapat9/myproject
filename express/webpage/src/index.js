const exprees =require('express');
const app =  exprees();
const port = 8000
const path = require('path');

//built in middleware

const staticpath = path.join(__dirname,'../public');

app.use(exprees.static(staticpath))

app.get('/',(req,res)=>{
    res.send('hello from server');
});


app.listen(port , ()=>{
    console.log("listening to the  port numbeer 8000");
});
