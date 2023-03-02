import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <div className='banner'>
        <Navbar />
       <div className='banner__content'>
          <div className='container'>
            <div className='banner__text'>
            <h3> Pizza Devlivary</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>lorem ispum dolor sit amet conculator adijinfewnnf elss.expexdooddcon minub ut moninnu4b  error molutij quail.
            </p>
            <div className='banner__btn'>
              <a href='./public/img/b1.jpg' className='btn btn-smart'>DEVLERY NOW</a>
            </div>
            </div>
           </div>
       </div>
    </div>
  )
}

export default Header;
