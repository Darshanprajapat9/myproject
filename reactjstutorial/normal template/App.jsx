import React from 'react';
import './index.css';
import Header from './component/Header';
import About from './component/About';
import Shop from './component/Shop';
import Menu from './component/Menu';
import Clients from './component/Clients';
import Price from './component/Price';

function App(){
  return( 
    <>
    <div>
      <Header />
      <About />
      <Shop/>
      <Menu/>
     <Clients/>
     <Price/>
    </div>
    </>
  );
}
export default App;
