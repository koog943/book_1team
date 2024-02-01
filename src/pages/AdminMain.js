import '../styles/adminMain.css';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function AdminMain() {    
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = localStorage.getItem('dummyBooks');
          
        if (storedBooks) {
            const parsedBooks = JSON.parse(storedBooks);
            setBooks(parsedBooks);
        }
    }, []);

    const goToUpdate = async (id, title, author, publisher, index, introducing, imagePath) => {

        try {
            navigate("/admin/book/update", { state: { bookId: id, title:title, author:author, publisher:publisher, index:index, introducing:introducing, imagePath:imagePath} });
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
                        {books.map((book, index) => (
                            <tr key={index}>
                                <td className='no'>{index + 1}</td>
                                <td className='title'>{book.title}</td>
                                <td className='author'>{book.author}</td>
                                <td className='publisher'>{book.publisher}</td>
                                <td className='editButton'>
                                <button onClick={() => goToUpdate(index, book.title, book.author, book.publisher, book.index, book.introducing, book.imagePath)}>편집하기</button>
                                </td>
                            </tr>
                        ))}
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
                    </tbody>
                </table>
            </section>
        </main>
    );
}


export default AdminMain;