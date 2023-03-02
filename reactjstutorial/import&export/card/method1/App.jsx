import React from 'react';

function App(){
    return(<>
        <div className='cards'>
        <div className='card'>
            <img src="https://wallpapercave.com/wp/wp4056410.jpg" alt='mypic' className='card__img' />
            <div className='card__info'>
                <span className='card__category'> A Netflix Orignal Series</span>
                    <h3 className='card__title'>DARK</h3>
                    <a href='https://www.netflix.com/in/title/80990668?source=3' target="_blank">
                        <button> Watch Now</button>
                    </a>
               </div>
        </div>
        </div>
        </>);}
        export default App;
