import React, {useState, useEffect} from 'react';
import '../styles/header.css';
import { Link} from 'react-router-dom';

import logo from '../assets/logo.svg';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        window.location.href = 'http://localhost:8088/book/login'; // 대상 외부 URL로 수정
        setIsLoggedIn(true);
    }

    const logout = () => {
        document.cookie = "Login_Check=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        window.location.reload();
    }

    useEffect(() => {
        setIsLoggedIn(isLogin)
    }, []);

    const isLogin = () => {
        // 쿠키 이름을 찾기 위해 ';'로 분리
        var cookies = document.cookie.split(';');
        // 각 쿠키에 대해 반복
        for(var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            // 공백 제거
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            // 쿠키 이름과 값을 분리
            var cookieName = cookie.split('=')[0];
            var cookieValue = cookie.split('=')[1];
            // 쿠키 이름이 주어진 이름과 같으면 true 반환
            if (cookieName === "Login_Check") {
                return true;
            }
        }

        // 쿠키 이름을 찾지 못했을 때 false 반환
        return false;
    }
    
    return(
        <div className='nav'>
            <div className='navLeft'>
                <Link to="/">
                    <img src={logo} alt='noImage'/>
                </Link>
                <div className='myPage'>
                    <Link to="/myPage">내서재</Link>
                </div>
                {isLoggedIn ? (
                    <div className='myPage'><Link to="/admin/book">책관리</Link></div>
                ) : ('')}
            </div>
            {isLoggedIn ? (
                    <button className='signOutBtn' onClick={logout}>로그아웃</button>
                ) : (
                    <button className='signUpBtn' onClick={login}>로그인</button>
                )}
        </div>
    );
}


export default Header;