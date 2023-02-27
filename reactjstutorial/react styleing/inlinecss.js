
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

const name = "Darshan Prajapat";
const heading ={
    color : 'red',
    textTransform:'capitalize',
    textAlign : 'center'
}
ReactDOM.render(
    <>
    <h1 style= { {
    color : 'red',
    textTransform:'capitalize',
    textAlign : 'center'
} } > my name is a {name} </h1>
    </>,
    document.getElementById("root")
);
