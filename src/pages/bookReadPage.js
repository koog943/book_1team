import React, {useState, useEffect} from 'react';
import '../styles/bookReadPage.css';

import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';

const BookReadPage = () => {
    
    const [bookContent, setbookContent] = useState('');
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 인덱스
    const [leftPageContent, setLeftPageContent] = useState('');
    const [rightPageContent, setRightPageContent] = useState('');
    
    // 텍스트 파일 불러오기
    useEffect(() => {
        const fetchTxtFile = async () => {
            try {
            const response = await fetch('/bookContent/content1.txt');
            const data = await response.text();
            setbookContent(data);
            } catch (error) {
            console.error('Error fetching the file:', error);
            }
        };
    
        fetchTxtFile();
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행됨
    
    // 페이지가 변경될 때마다 왼쪽과 오른쪽 페이지의 텍스트 업데이트
    useEffect(() => {
        const charsPerPage = 416; //각 페이지당 글자 수
        const leftStart = currentPage * charsPerPage;
        const rightStart = (currentPage + 1) * charsPerPage;

        const leftContent = bookContent.slice(leftStart, leftStart + charsPerPage);
        const rightContent = bookContent.slice(rightStart, rightStart + charsPerPage);

        setLeftPageContent(leftContent);
        setRightPageContent(rightContent);
    }, [currentPage, bookContent]);

    // 왼쪽 페이지로 이동하는 이벤트 핸들러
    const handleLeftButtonClick = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    
    // 오른쪽 페이지로 이동하는 이벤트 핸들러
    const handleRightButtonClick = () => {
        if (currentPage < Math.floor(bookContent.length / 416) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };
    return(
        <div className='container'>
            
            <div className='main2'>
                <img  class="leftBtn" src={arrowLeft} alt="Click me" onClick={handleLeftButtonClick}/>
                <div className='book'> 
                    <div className='bookLeft'>
                        {leftPageContent}
                    </div>
                    <div className='bookRight'>
                        {rightPageContent}
                    </div>
                </div>
                <img  class="rightBtn" src={arrowRight} alt="Click me" onClick={handleRightButtonClick}/>
            </div>
        </div>
    );
};

export default BookReadPage;