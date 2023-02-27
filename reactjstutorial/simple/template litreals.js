 
import React from 'react';

import ReactDOM from 'react-dom';


   //template litreals method

   const fname = "darshan";
   const lname = "Prajapat";

   ReactDOM.render(
    <>  
    <h1>  {'my name is a ${fname}  ${lname}'}</h1>
<h1> my name is { fname} and surname {lname}</h1>
<h3> my name is { fname + " " + lname}</h3>
<h5> my name is { fname + lname}</h5>
<p>and my age is{5+12+3.5}</p>
</>,
document.getElementById("root"));


// challenge 2 

const fname = "Darshan";
const lname = "Prajapat";
const currDate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();

ReactDOM.render(
    <>
    <h1>My name is {fname +" " +lname}</h1>
     <p> current date is = {currDate}</p>
     <p> current date is = {currtime}</p>
    </>,
    document.getElementById("root"));
    
