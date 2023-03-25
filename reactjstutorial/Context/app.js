

import React, { createContext } from "react";
import ComponentA from "./ComponentA";


const Fname = createContext();
const Lname =createContext();

const App = ()=>{
    return(<>

    <Fname.Provider  value={"Darshan"}>
        <Lname.Provider  value="Prajapat">
        <ComponentA/>
        </Lname.Provider>
       
    </Fname.Provider>
   
    </>);
}
export default App;
export {Fname ,Lname};
