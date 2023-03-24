import React,{useState} from 'react';
import {question} from './api'
import './accordion.css';
import Myaccordion from './Myaccordian';

const Accordion =()=>{
  
    const [data ,setdata]  = useState(question);
    return(<>
    <section  className='main-div'>
        <h1>React Interview Question</h1>
  
  {
    data.map((curElem)=>{
        const {id } = curElem;
        return <Myaccordion  key={id} {...curElem}/>
    })
  }
    </section>
    </>)

}
export default Accordion ; 

