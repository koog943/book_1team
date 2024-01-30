import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/header.js';
import BookDetailPage from "./pages/bookDetailPage.js";
import BookReadPage from "./pages/bookReadPage.js";
import MyPage from "./pages/myPage.js";

function App() {
    
    return (
        <BrowserRouter>
            <div className="App">
                <Header></Header>
                <Routes>
                    {/* <Route path="/book" element={<Book />} /> */}
                    <Route path="/detail" element={<BookDetailPage />} />
                    <Route path="/detail/read" element={<BookReadPage />} />
                    <Route path="/myPage" element={<MyPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;