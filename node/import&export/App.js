
const add=(a,b)=>{
  return a + b ;
};
const sub=(a,b)=>{
    return a -  b ;
  };
  const mult=(a,b)=>{
    return a * b ;
  };
  const div =(a,b)=>{
    return a / b ;
  };
  
module.exports.add =add;
module.exports.sub =sub;
module.exports.mult =mult;
module.exports.div =div;

//or

module.exports ={add , sub ,mult , div}
