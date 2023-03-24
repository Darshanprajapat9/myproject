import React,{useState} from 'react';
const Myaccordian = ({question ,answer})=>{

const [show , setshow] = useState(false)

    return(<>
       <div className='main-heading'>
       <p onClick={()=>setshow(!show)}> { show? '-': '+'} {question} </p>
     
     
       </div>{
        show &&   <p className='answer'>{answer}</p>
       }
      
    </>)
}
export default Myaccordian;
