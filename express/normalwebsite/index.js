const express = require('express');
const nav = express();
const port =3000;
const path = require('path');



const staticPath =path.join(__dirname,'../public')

//builtin middleware
nav.use(express.static(staticPath));

nav.get('/',(req,res)=>{
    res.write('<h1>wel come to my home page</h1>');
    res.write('<h1>wel come to my home page</h1>');
    res.send();
});

nav.get('/about',(req,res)=>{
    res.send('wel come to about page');
});

nav.get('/contact',(req,res)=>{
    res.send('wel come to my contact page');
});

nav.get('/temp',(req,res)=>{
    res.json([
        {
          id:1,
          name :'Darshan'
        },
        {
        id:2,
        name :'Rashid'
        }
        ,
        {
            id:3,
            name :'Nauman'
        }

]);
});

nav.listen(port ,'127.0.0.1', ()=>{
    console.log('complate sucessful complate your chellnge');
});

