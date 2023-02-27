
import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const name ="Darshan Prajapat"; 
const img1 ="https://picsum.photos/200/300 ";
const img2 ="https://picsum.photos/200/300 ";
const img3 ="https://picsum.photos/200/300 ";
const link ="https://picsum.photos/200/300 ";

ReactDOM.render(<>

  <h1 contentEditable ="true" className="heading">my name is {name}</h1>
<div className="image">
<img src={img1} alt="rendom image"/>
<img src={img2} alt="rendom image"/>
<img src={img3} alt="rendom image"/>
<a  href={link} target="_top"> 
<img src="https://picsum.photos/200/300 " alt="rendom image"/></a></div>
</>,
document.getElementById("root");}
