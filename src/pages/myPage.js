import React, { useState } from 'react';
import '../styles/myPage.css';
import { useSnapCarousel } from 'react-snap-carousel';

const MyPage = () => {
    
    const { scrollRef } = useSnapCarousel();
    const [ isActive, setIsActive ] = useState(false);
    const [ isActive2, setIsActive2 ] = useState(false);
    
    // 유저 데이터 폼
    const [userData, setUserData] = useState({
        userName: '이름3',
        userMoney: 9900,
        userAuthority: 1,
        userSubscribeStatus: false,
        userLikeBookList : {
            bookId : [1, 3, 6, 10]
        }
    });
    
    // 책 데이터 폼
    // const [bookData, setBookData] = useState({
    //     bookId: 1,
    //     "coverImg" : "iVBORw0KGgoAAAANSUhEUgAAADkAAAAxCAIAAADvKZa/AAA" // 이미지 데이터 인코딩
    // });
    
    // 책 슬라이드
    const imageFiles = Array.from({ length: 6 }, (_, i) => `/bookImg/book${i + 1}.png`);
    
    // 구독 모달 창
    const modalActive = () => {
        setIsActive(!isActive);
    };
    
    // 경고 모달 창
    const modalActive2 = () => {
        setIsActive2(!isActive2);
    };
    
    // 구독권 결제
    const paySubscription = () => {
        // 유저가 이미 구독 중이거나 잔액이 부족할 경우 결제가 이루어지지 않음
        if (userData.userSubscribeStatus || userData.userMoney < 9900) {
            modalActive2();
            return;
        }
        // 유저의 잔액 및 구독 여부를 갱신하고 모달을 활성화
        else {
            setUserData((prevUserData) => ({ 
                ...prevUserData,
                userMoney: prevUserData.userMoney - 9900,
                userSubscribeStatus: !prevUserData.userSubscribeStatus
            }));
            modalActive();    
        }
    }
    
    return (
        <div className='container'>
            
            <div className='title3'>내 정보</div>
            
            <div className='main3'>
                <div className='main3Top'>
                    <div className='nickname'>{userData.userName}</div>
                    <button className='subscribeBtn' onClick={modalActive}>구독하기</button>
                </div>
                <div className='main3Middle'>
                    <div className='currentMoneyTitle'>💰 현재 소지 금액 💰</div>
                    <div className='currentMoney'>{userData.userMoney}₩</div>
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
            
            <div className={`modal ${isActive ? '' : 'unactive'}`}>
                <div className='modalWindow'>
                    <div className='creditTitle'>
                        결제를 진행하시겠습니까?
                    </div>
                    <div className='subscribe'>한 달 구독권 가격 : 9,900₩</div>
                    <div className='selectBtn'>
                        <div className='yesBtn' onClick={paySubscription}>네</div>
                        <div className='noBtn' onClick={modalActive}>아니요</div>
                    </div>
                </div>
            </div>
            
            <div className={`modal2 ${ isActive2 ? '' : 'unactive'}`}>
                div
                <div className='modalWindow2'>
                    <div className='creditTitle2'>
                        <div className='warning'>🚫 경고[결제 불가] 🚫<br /><br /></div>
                        * 이미 구독 중이거나 잔액이 부족합니다. *
                    </div>
                    <button className='closeBtn' onClick={modalActive2}>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default MyPage;