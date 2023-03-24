import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App =()=>{
    return(<>

  <h1  className="text-center text-danger text-capitalize mt-5 mb-5">Wel come to my channel</h1>
 
    <div class="container text-center">
  <div class="row">

    <div className="col-sm">
    <div  className="card" >
  <img src="https://picsum.photos/id/237/30/30"  classNameName="card-img-top" alt=".."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>


    </div>
    

    <div className="col-sm">
    <div  className="card" >
  <img src="https://picsum.photos/id/237/30/30"  classNameName="card-img-top" alt=".."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
 </div>
    
    
    <div className="col-sm">
    <div  className="card" >
  <img src="https://picsum.photos/id/237/30/30"  classNameName="card-img-top" alt=".."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
  </div>
    

    </div>
  </div>

  </>)

}
export default App;
