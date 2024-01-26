import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile'
import {Container} from "@mui/material";
import BookList from './BookList';

function App() {
  return (
    <Container sx={{p:5}} maxWidth="lg">
      <Router>
        <Routes>
          <Route path="/bookList" element={<BookList/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
