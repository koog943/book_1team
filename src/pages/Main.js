import Book from '../components/Book';
import dummyBookData from '../constants/dummyBookData'
import '../App.css';
import React, { useState, useEffect } from 'react';


function Main() {
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //   // 컴포넌트가 마운트될 때 데이터를 가져옴
    //   fetchBooks();
    // }, []);

    const [books, setBooks] = useState(dummyBookData);

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


export default Main;