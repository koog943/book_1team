import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Book.css';

// Book 컴포넌트 선언
function Book(props) {
    const navigate = useNavigate();

    const handleBookClick = () => {
        // 클릭 시 bookDetailPage 페이지로 이동
        navigate('/detail', { state: { bookId: props.bookId, dummyBooks:props.dummyBooks } });
    };

    return (
        <div className='bookProduct' onClick={handleBookClick}>
            <img src={props.imgSrc} alt='img'></img>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
        </div>
    );
}

export default Book;
