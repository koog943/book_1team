import '../styles/adminMain.css';
import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function AdminMain() {    
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const book = {
        "title":"참을 수 없는 존재의 가벼움",
        "author":"밀란 쿤데라",
        "publisher":"민음사",
        "index":"아자아자차카",
        "content":"가나다라"
    }

    const goToUpdate = async (bookId) => {
        try {
            // // 서버에서 책 데이터 가져오기
            // const response = await fetch(`http://localhost/getBook/${bookId}`);
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            // const bookData = await response.json();

            // // updateBook 컴포넌트로 책 데이터 전달
            navigate("/admin/book/update", { state: { book } });
        } catch (error) {
            console.error('Error getting book data:', error);
        }
    }

    const goToCreate = () => {
        navigate("/admin/book/new");
    }

    const handleSearch = async () => {
        const ipAddress = 'localhost';

        try {
            const response = await fetch(`http://${ipAddress}/search?q=${searchQuery}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Search results:', data);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <main>
            <section className='searchSection'>
                <input
                    className="searchBar"
                    type="text"
                    name="q"
                    placeholder="검색어를 입력하세요"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <div className='searchImgBox' onClick={handleSearch}>
                    <img className='searchImg' src='/img/search.png' alt='돋보기'></img>
                </div>
            </section>
            <section className='bookList'>
                <h1>책 목록</h1>
                <table className='bookTable'>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>저자</th>
                            <th>출판사</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='no'>1</td>
                            <td className='title'>참을 수 없는 존재의 가벼움</td>
                            <td className='author'>밀란 쿤데라</td>
                            <td className='publisher'>민음사</td>
                            <td className='editButton'>
                                <button onClick={goToUpdate}>편집하기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'>2</td>
                            <td className='title'>인간실격</td>
                            <td className='author'>다자이 오사무</td>
                            <td className='publisher'>민음사</td>
                            <td className='editButton'>
                            <button onClick={goToUpdate}>편집하기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'>
                                <img className='plus' src='/img/plus-sign.png' alt="plus" onClick={goToCreate}></img>
                            </td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'></td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'></td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'></td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'></td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'></td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'></td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'></td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'></td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'></td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                        <tr>
                            <td className='no'></td>
                            <td className='title'></td>
                            <td className='author'></td>
                            <td className='publisher'></td>
                            <td className='editButton'>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}


export default AdminMain;