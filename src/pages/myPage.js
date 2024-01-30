import React from 'react';
import '../styles/myPage.css';
import { useSnapCarousel } from 'react-snap-carousel';

const MyPage = () => {
    // const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();
    const { scrollRef } = useSnapCarousel();
    
    const imageFiles = Array.from({ length: 6 }, (_, i) => `/bookImg/book${i + 1}.png`);
    
    return (
        <div className='container'>
            
            <div className='title3'>내 정보</div>
            
            <div className='main3'>
                <div className='main3Top'>
                    <div className='nickname'>OOO님</div>
                    <button className='subscribeBtn'>구독하기</button>
                </div>
                <div className='main3Middle'>
                    <div className='currentMoneyTitle'>💰 현재 소지 금액 💰</div>
                    <div className='currentMoney'>253,000₩</div>
                </div>
                <div className='main3Bottom'>
                    <div className='main3BottomTitle'>내가 좋아요 누른 책</div>
                    <ul
                        ref={scrollRef}
                        style={{
                            display: 'flex',
                            overflow: 'auto',
                            scrollSnapType: 'x mandatory'
                        }}
                    >
                        {imageFiles.map((image, i) => (
                            <li key={i}>
                                <img src={image} alt={`Book ${i + 1}`} className='bookCover' />
                            </li>
                        ))}
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default MyPage;