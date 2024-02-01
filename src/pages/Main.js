import Book from '../components/Book';
import '../App.css';
import React, { useState, useEffect } from 'react';
import dummyBooks from '../constants/dummyBooks';

function Main() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const storedBooks = localStorage.getItem('dummyBooks');
        
      if (storedBooks) {
          const parsedBooks = JSON.parse(storedBooks);
          setBooks(parsedBooks);
      } else {
          setBooks(dummyBooks);
          localStorage.setItem('dummyBooks', JSON.stringify(dummyBooks));
      }
  }, []);

    return (
        <main>
        <section className='popularBooks'>
          <h1>소설 인기 도서</h1>
          <ul className='mainBookList'>
              {books.map(book => (
                <Book imgSrc={book.imagePath} title={book.title} author={book.author} bookId={book.bookId} dummyBooks={dummyBooks}/>
              ))}
          </ul>
        </section>
        <section className='popularBooks'>
          <h1>추리 스릴러</h1>
          <ul className='mainBookList'>
              {books.map(book => (
                <Book imgSrc={book.imagePath} title={book.title} author={book.author} />
              ))}
          </ul>
        </section>
      </main>
    );
}


export default Main;