const express = require('express');
const nav = express();
const port =3000;


nav.get('/',(req,res)=>{
    res.send('wel come to my home page');
});

nav.get('/about',(req,res)=>{
    res.send('wel come to about page');
});

nav.get('/contact',(req,res)=>{
    res.send('wel come to my contact page');
});

nav.get('/temp',(req,res)=>{
    res.send('wel come to my temp page');
});

nav.listen(port ,'127.0.0.1', ()=>{
    console.log('complate sucessful complate your chellnge');
});

