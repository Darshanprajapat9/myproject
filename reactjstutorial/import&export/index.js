 //immport and expoert
 //method 1
 
import React from 'react';
import  ReactDOM  from 'react-dom';
import myfav , {name , myfunction} from './App';//default ko koi byhi name de sakte

ReactDOM.render(
    <>
    <ol>
        <li> Darshan Prajapat </li>
        <li>{myfav}</li>
        <li>{name}</li>
        <li>{myfunction()}</li>
    </ol>
    </>,
    document.getElementById("root")
);
