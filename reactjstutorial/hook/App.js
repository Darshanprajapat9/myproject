import React,{useState} from "react";



const  App = () =>{

 const[aname , setName] =useState("");
const [fullName ,setfullname] = useState("");

  const InputEvent =(event) =>{

    //console.log(event.target.value);
    setName(event.target.value);
  };
  const onSubmit=()=>{
    setfullname(aname);
  }

  return( <div>
    <h1>Hello {fullName}</h1>
    <input type="text"  placeholder="enter the your name" value ={aname} onChange={InputEvent} />
  <button onClick={onSubmit} >Click me</button>
  </div>);
}

export default App;
