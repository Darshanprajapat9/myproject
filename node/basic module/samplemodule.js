(1)  .please install the npl chalk module

>npm i chalk

const chalk = require('chalk);
                      
 consloe.log(chalk.blue('hello world'));

(2) a validatot module installe 

>npm i validator

const validator = require('validator');

const res = validator.isEmial(' darshanprajapat9@gmail.com');

console.log(res);

res=>true

(3)  module wrapper function 

(
  function (){
var a = 'Darshan';
    console.log(a);
  }
)();

console.log(__dirname);
console.log(__filename);

output=>Darshan
     D:nodejs/npmnode
     D:nodejs/npmnode/index.js

