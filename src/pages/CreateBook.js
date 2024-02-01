import React, { useState, useRef } from 'react';
import '../styles/adminBook.css';
import { useNavigate } from "react-router-dom";

function AdminBook() {
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedTxtFile, setSelectedTxtFile] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [publisher, setPublisher] = useState('');
    const [tableOfContents, setTableOfContents] = useState('');
    const [introduction, setIntroduction] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleTxtFileChange = (event) => {
        setSelectedTxtFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (selectedFile && selectedTxtFile && title && author && publisher && tableOfContents && introduction) {
            const storedBooks = localStorage.getItem('dummyBooks');
            const parsedBooks = JSON.parse(storedBooks);

            const tmp = {
                "차라투스트라는 이렇게 말했다":"/bookImages/차라투스트라는이렇게말했다.jpg",
                "바른마음":"/bookImages/바른마음.jpg",
                "만들어진 신":"/bookImages/만들어진신.jpg"
            }

            const newBook = {
                bookId: parsedBooks.length + 1,
                title: title,
                author: author,
                publisher: publisher,
                index: tableOfContents,
                introducing: introduction,
                imagePath:tmp[title]
            }

            // dummyBooks.js를 업데이트하기 위해 새로운 책 데이터를 추가
            parsedBooks.push(newBook);
            localStorage.setItem('dummyBooks', JSON.stringify(parsedBooks));

            console.log('New book added:', newBook);
            console.log('Updated dummyBooks:', parsedBooks);

            navigate("/admin/book");
        } else {
            console.log("Please fill in all fields and select all files.");
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <main>
            <h2 className='pageTitle'>책 등록하기</h2>
            <section className='adminBookSection'>
                <div className="bookHeader">
                    <div className="imgBox">
                        <div className="imagePreview" onClick={handleImageClick}> 
                            {selectedFile ? ( <img src={URL.createObjectURL(selectedFile)} alt="Preview" /> ) : ( <div className="placeholder">책 이미지를 업로드해주세요.</div> )}
                        </div>
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }}/>
                    </div>
                    <div className='basicData'>
                        <h3>제목</h3>
                        <input className="title" value={title} onChange={(e) => setTitle(e.target.value)} />                        
                        <h3>지은이</h3>
                        <input className="author" value={author} onChange={(e) => setAuthor(e.target.value)} />                        
                        <h3>출판사</h3>
                        <input className="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} />                        
                    </div>
                    <button className='updateButton' onClick={handleUpload}>등록하기</button>
                </div>
                
                <div className='content'>
                    <h3>목차</h3>
                    <textarea value={tableOfContents} onChange={(e) => setTableOfContents(e.target.value)}></textarea>
                </div>
                <div className='introduce'>
                    <h3>책 소개</h3>
                    <textarea value={introduction} onChange={(e) => setIntroduction(e.target.value)}></textarea>
                </div>
                <div>
                    <h3>책 파일 업로드</h3>
                    <input type="file" onChange={handleTxtFileChange} />
                </div>
            </section>
        </main>
    );
}

export default AdminBook;
