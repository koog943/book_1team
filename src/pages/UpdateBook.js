import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/adminBook.css';

function AdminBook() {
    const location = useLocation();
    const [bookId, title, author, publisher, index, introducing, imagePath] = 
        [location.state.bookId, location.state.title, location.state.author, 
         location.state.publisher, location.state.index, location.state.introducing, 
         location.state.imagePath];
    const [selectedImgFile, setSelectedImgFile] = useState(null);
    const [selectedTxtFile, setSelectedTxtFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        // 파일 변경 로직
        setSelectedImgFile(event.target.files[0]);
    };

    const handleTxtFileChange = (event) => {
        // 텍스트 파일 변경 로직
        setSelectedTxtFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // 업로드 처리 로직
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <main>
            <h2 className='pageTitle'>책 편집하기</h2>
            <section className='adminBookSection'>
                <div className="bookHeader">
                    <div className="imgBox">
                        <div className="imagePreview" onClick={handleImageClick}>
                            {selectedImgFile ? ( <img src={URL.createObjectURL(selectedImgFile)} alt="Preview" /> ) : ( <img src={imagePath} alt="Preview" /> )}
                        </div>                        
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }}/>
                    </div>
                    <div className='basicData'>
                        <h3>제목</h3>
                        <input className="title" value={title}/>                        
                        <h3>지은이</h3>
                        <input className="author" value={author}/>                        
                        <h3>출판사</h3>
                        <input className="publisher" value={publisher}/>                        
                    </div>
                    <button className='updateButton' onClick={handleUpload}>등록하기</button>
                </div>
                
                <div className='content'>
                    <h3>목차</h3>
                    <textarea value={index.replace(/<br>/g, '\n')}></textarea>
                </div>
                <div className='introduce'>
                    <h3>책 소개</h3>
                    <textarea value={introducing.replace(/<br>/g, '\n')}></textarea>
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
