import React from 'react';
import '../styles/Book.css'; // Book 컴포넌트의 CSS 파일을 import

// Book 컴포넌트 선언
function Book(props) {
    return (
        <div className='book'>
            <img src={props.imgSrc} alt='img'></img>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
        </div>
    );
}


export default Book;
