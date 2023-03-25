import React from 'react';
import {Fname , Lname} from './App';
const ComponentC = () =>{

    return(<>
   <Fname.Consumer>
    {
      (Fname)=>{
            return(
              <Lname.Consumer>
                {
                  (Lname) =>{
                   return ( <h1> my name is {Fname} {Lname}</h1>)
                  }
                }
             </Lname.Consumer>
            )
            
            
      }
    }
   </Fname.Consumer>
    </>);

}

export default ComponentC;
