/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Book from './components/Book';
import dummyBookData from './constants/dummyBookData'
import './App.css';
import fetchBooks from './services/fetchBooks';
// App 컴포넌트 선언
function App() {
  //const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   // 컴포넌트가 마운트될 때 데이터를 가져옴
  //   fetchBooks();
  // }, []);

  const [books, setBooks] = useState(dummyBookData); // TODO: 서버에서 받아오는 걸로 바꿔야함

  return (
    <main>
      <section className='popularBooks'>
        <h1>소설 인기 도서</h1>
        <ul className='bookList'>
            {books.map(book => (
              <Book imgSrc={book.imagePath} title={book.title} author={book.author} />
            ))}
        </ul>
      </section>
      <section className='popularBooks'>
        <h1>추리 스릴러</h1>
        <ul className='bookList'>
            {books.map(book => (
              <Book imgSrc={book.imagePath} title={book.title} author={book.author} />
            ))}
        </ul>
      </section>      
    </main>
  );
}

export default App;