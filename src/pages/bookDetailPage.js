import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/bookDetailPage.css';

import bookImage from '../assets/bookImage.svg';
import likeImg from '../assets/like.svg';
import unlikeImg from '../assets/unlike.svg';
import reviewImg from '../assets/reivewImg.svg';


const BookDetailPage = () => {
    // 'like' 상태와 해당 상태를 업데이트할 함수 'setLike'를 정의.
    const [ like, setLike ] = useState(false);
    
    const handleLikeChange = () => {
        setLike(!like);
    };
    
    return (
        <div className='container'>
            
            <div className='main'>
                <div className='mainTop'>
                    <img className ='bookImage' src={bookImage} alt='noImage'/>
                    <div className='mainTopContent'>
                        <div className='mainTopContentLeft'>
                            <div className='title content1'>
                                제목
                                <div className='titleTxt content2'>메타버스 모든 것의 혁명</div>
                            </div>
                            <div className='author content1'>
                                지은이
                                <div className='authorTxt content2'>매튜 볼</div>
                            </div>
                            <div className='content1'>
                                출판사
                                <div className='publisherTxt content2'>다산 북스</div>
                            </div>
                        </div>
                        <div className='mainTopContentRight'>
                            <button className='favoriteBtn' onClick={handleLikeChange}>
                                <img className ='likeImg' src={like ? likeImg : unlikeImg} alt='noImage'/>
                                My Favforite
                            </button>
                            <button className='reviewBtn' href='#review'>
                                <img className ='reviewImg' src={reviewImg} alt='noImage'/>
                                한 줄 리뷰
                            </button>
                            <Link to="/detail/read" className='readBtn'>
                                바로읽기
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='title2'>
                    <div className='bookContentTitle'>목차</div>
                    <div className='bookIndex'></div>
                </div>
                <div className='title2'>
                    <div className='bookContentTitle'>책 소개</div>
                    <div className='bookIntro'></div>
                </div>
                <div className='title2'>
                <div className='bookContentTitle'>한 줄 리뷰</div>
                    <div className='bookReview'></div>
                </div>
            </div>
            
        </div>
    );
}

export default BookDetailPage;