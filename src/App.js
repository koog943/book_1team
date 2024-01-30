import React from 'react';
import './App.css';
/* eslint-disable */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import AdminMain from './pages/AdminMain';
import CreateBook from './pages/CreateBook';
import UpdateBook from './pages/UpdateBook';

import BookDetailPage from "./pages/bookDetailPage.js";
import BookReadPage from "./pages/bookReadPage.js";
import MyPage from "./pages/myPage.js";

function App() {
  
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin/book" element={<AdminMain />}></Route>
          <Route path="/admin/book/new" element={<CreateBook />}></Route>
          <Route path="/admin/book/update" element={<UpdateBook />}></Route>
          <Route path="/detail" element={<BookDetailPage />} />
          <Route path="/detail/read" element={<BookReadPage />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;