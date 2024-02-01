import Book from '../components/Book';
import '../App.css';
import React, { useState, useEffect } from 'react';

function Main() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      // 컴포넌트가 마운트될 때 데이터를 가져옴
      fetchBooks();
    }, []);

    setInterval(function() {
      if (document.cookie.split(';').filter(function(item) {
          return item.indexOf('SESSION') >= 0;
      }).length) {
          console.log('SESSION 쿠키가 존재합니다.');
      } else {
          console.log('SESSION 쿠키가 존재하지 않습니다.');
      }
    }, 1000); // 1초에 한 번씩 확인

    const fetchBooks = async () => {
      try {
          const response = await fetch('http://localhost:8082/book'); // API 엔드포인트를 여기에 넣으세요.
          if (!response.ok) {
              throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.');
          }
          const data = await response.json();
          setBooks(data._embedded.book); // 서버에서 가져온 도서 데이터를 설정합니다.
      } catch (error) {
          console.error('데이터 가져오기 실패:', error.message);
      }
    };
    

    return (
        <main>
        <section className='popularBooks'>
          <h1>소설 인기 도서</h1>
          <ul className='mainBookList'>
              {books.map(book => (
                <Book imgSrc={'/img/' + book.title.replace(/\s/g,'') + '.jpeg'} title={book.title} author={book.author} />
              ))}
          </ul>
        </section>
        <section className='popularBooks'>
          <h1>추리 스릴러</h1>
          <ul className='mainBookList'>
              {books.map(book => (
                <Book imgSrc={"/img/" + book.title.replace(/\s/g,"") + ".jpeg"} title={book.title} author={book.author} />
              ))}
          </ul>
        </section>      
      </main>
    );
}


export default Main;