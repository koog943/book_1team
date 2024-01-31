import React, {useState} from 'react';
import '../styles/header.css';
import { Link} from 'react-router-dom';

import logo from '../assets/logo.svg';

function Header() {
    
    // 로그인/로그아웃 상태를 관리하는 상태 변수
    const [signUp, setSignUp] = useState(true);

    // 로그인/로그아웃 상태 변경 함수
    const handleLoginChange = () => {
        // signUp 값이 true일 때 외부 URL로 이동
        if (signUp) {
            window.location.href = '35.244.15.13:8080/book/list'; // 대상 외부 URL로 수정
        } else {
            // 로그아웃 로직 또는 다른 동작 수행
            // 여기에서는 로그아웃 로직은 제공되지 않았으므로 예시로 콘솔 로그를 출력
            console.log('로그아웃 로직 수행');
        }
        // 상태 값 변경
        setSignUp(!signUp);
    };
    
    return(
        <div className='nav'>
            <div className='navLeft'>
                <Link to="/">
                    <img src={logo} alt='noImage'/>
                </Link>
                <div className='myPage'>
                    <Link to="/myPage">내서재</Link>
                </div>
            </div>
            <button 
                className={`signUpBtn ${!signUp && 'signOutBtn'}`}
                onClick={handleLoginChange}>
                {signUp ? '로그인' : '로그아웃'}
            </button>
        </div>
    );
}


export default Header;