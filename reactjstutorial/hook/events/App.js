import React,{useState} from "react";

const  App = () =>{
  const purple = '#8e44ad';
  const [bg, setBG] = useState(purple);

  
const[aname ,setName] =useState("click");


  const bgChange = () =>{
 // console.log("click");
   let newBg ='#34495e';
    setBG(newBg)

    setName('ouch ');

  }
  const bgBack =() =>{
 setBG(purple);
 setName(' click');
  }


  return( <div style ={ { backgroundColor : bg}}>
    <button onClick={ bgChange} onDoubleClick={bgBack} >{aname}</button>
  </div> );

}

export default App;
