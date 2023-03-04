
const add = require('./App');

console.log(App);
console.log(App.add(5,5));
console.log(App.sub(10,5));
console.log(App.mult(5,5));
console.log(App.div(15,5));

//or

const {add , sub ,mult , div} =require("./App");
console.log(add(5,5));
console.log(sub(10,5));
console.log(mult(5,5));
console.log(div(15,5));
