/*
1.convert to json 
2.dusre file me add karna he
3.radfile
4.again convert back to js obj ori
5.console.log
*/

const fs = require("fs");

const bioData ={
    name : 'darshan',
    age:20,
    channnel :'darshan technical'
}

//1.convert to json 
const jsondata  = JSON.stringify(bioData);
console.log(jsondata);

//2.dusre file me add karna he

fs.writeFile("json1.json",jsondata,(err)=>{
    console.log('done');
    
    
//3.radfile
    fs.readFile('json1.json','utf-8',(err,data)=>{
     //   console.log(data);
      
     //4. 4.again convert back to js obj ori
     const object  = JSON.parse(data);
     console.log(object);
      
      //5.console.log
     console.log(data);
    })
});
