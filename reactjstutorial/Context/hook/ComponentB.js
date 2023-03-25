import React,{useContext} from 'react';
import ComponentC from './ComponentC';
import {Fname ,Lname } from './App';

const ComponentB = () =>{

    const fname = useContext(Fname );
    const lname = useContext(Lname );

    return(<>
    <h1>my name is {fname} {lname}</h1>
    <ComponentC/>
    </>);

}

export default ComponentB;
