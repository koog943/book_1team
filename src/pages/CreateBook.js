import React, { useState, useRef } from 'react';
import '../styles/adminBook.css';

function AdminBook() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedTxtFile, setSelectedTxtFile] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
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
            console.log(selectedFile);
            console.log(selectedTxtFile);
            console.log(title);
            console.log(author);
            console.log(publisher);
            console.log(tableOfContents);
            console.log(introduction);

            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('txtFile', selectedTxtFile);
            formData.append('title', title);
            formData.append('author', author);
            formData.append('publisher', publisher);
            formData.append('contents', tableOfContents);
            formData.append('introduction', introduction);

            // 이제 formData를 서버로 보내는 로직을 작성합니다.
            // 예를 들어 fetch를 사용하여 POST 요청을 보낼 수 있습니다.
            await fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Upload successful:', data);
            })
            .catch(error => {
                console.error('Error uploading:', error);
            });
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
