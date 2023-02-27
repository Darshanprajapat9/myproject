import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

let currDate =new Date(2022,20,5,200).getHours();
let greeting =''
const cssStyle ={ };

if(currDate >=1 && currDate <12){
  greeting ='Good morning';
  cssStyle.color ='green';
}
else
if(currDate >=1 && currDate <19){
    greeting ='Good afternoon';
    cssStyle.color ='orange';
  }
  else{
    greeting ='good night';
    cssStyle.color ='black';
  }

ReactDOM.render(
    <>
    <div>
    <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
    </>
    ,document.getElementById("root")
);
