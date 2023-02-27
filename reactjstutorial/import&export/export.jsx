export {name , myfunction};

import React from 'react';
import add , { sub , div ,mult}from './Calculator';

function App(){
    return(<><h1>sum of two number add(40,4) :{ add(40,4)}</h1>
    <h1>sub of two number  sub(40,4): {sub(40,4)}</h1>
    <h1>Div of two number  div(40,4): {div(40,4)}</h1>
    <h1>mult of two number mult(40,4) : {mult(40,4)}</h1></>);
}
export default App;



