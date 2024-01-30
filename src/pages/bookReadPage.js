import React from 'react';
import '../styles/bookReadPage.css';

import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';

const BookReadPage = () => {
    
    return(
        <div className='container'>
            
            <div className='main2'>
                <img  class="leftBtn" src={arrowLeft} alt="Click me"/>
                <div className='book'> 
                    <div className='bookLeft'>
                        
                    </div>
                    <div className='bookRight'>
                        
                    </div>
                </div>
                <img  class="rightBtn" src={arrowRight} alt="Click me"/>
            </div>
        </div>
    );
};

export default BookReadPage;