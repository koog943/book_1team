import React, {useState} from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

function Header() {
    
    const [ signUp, setSignUp ] = useState(true);

    const handleLoginChange = () => {
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