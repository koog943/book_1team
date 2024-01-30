import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/adminBook.css';

function AdminBook() {
    const location = useLocation();
    const bookData = location.state.book;

    const [selectedImgFile, setSelectedImgFile] = useState(null);
    const [selectedTxtFile, setSelectedTxtFile] = useState(null);
    const [title, setTitle] = useState(bookData.title);
    const [author, setAuthor] = useState(bookData.author);
    const [publisher, setPublisher] = useState(bookData.publisher);
    const [content, setContent] = useState(bookData.content);
    const [index, setIndex] = useState(bookData.index);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        setSelectedImgFile(event.target.files[0]);
    };

    const handleTxtFileChange = (event) => {
        setSelectedTxtFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedImgFile && selectedTxtFile && title && author && publisher && content && index) {
            console.log(selectedImgFile);
            console.log(selectedTxtFile);
            console.log(title);
            console.log(author);
            console.log(publisher);
            console.log(content);
            console.log(index);

            // const formData = new FormData();
            // formData.append('image', selectedImgFile);
            // formData.append('txtFile', selectedTxtFile);
            // formData.append('title', title);
            // formData.append('author', author);
            // formData.append('publisher', publisher);
            // formData.append('contents', content);
            // formData.append('index', index);

            // // 이제 formData를 서버로 보내는 로직을 작성합니다.
            // // 예를 들어 fetch를 사용하여 POST 요청을 보낼 수 있습니다.
            // fetch('/upload', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Upload successful:', data);
            // })
            // .catch(error => {
            //     console.error('Error uploading:', error);
            // });
        } else {
            console.log("Please fill in all fields and select all files.");
        }
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
                            {selectedImgFile ? ( <img src={URL.createObjectURL(selectedImgFile)} alt="Preview" /> ) : ( <div className="placeholder">책 이미지를 업로드해주세요.</div> )}
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
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className='introduce'>
                    <h3>책 소개</h3>
                    <textarea value={index} onChange={(e) => setIndex(e.target.value)}></textarea>
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
