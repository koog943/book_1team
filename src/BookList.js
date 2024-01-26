import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button  } from '@mui/material';
import axios from 'axios';
import APIConfig from './APIConfig'
const styles = {
  root: {
    marginTop: '20px',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHead: {
    backgroundColor: '#f0f0f0',
  },
  tableCell: {
    padding: '12px 16px',
    borderBottom: '1px solid #ddd',
  },
  link: {
    textDecoration: 'none',
    color: 'blue',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/books');
      console.log('response : ', response.data)
      setBooks(response.data);
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (

    <div style={styles.root}>
      <Typography variant="h4" style={styles.title}>
        게시글 조회
      </Typography>
      <div style={styles.buttonContainer}>
        <Button component={Link} to="/signup" variant="outlined" style={{ marginRight: '10px' }}>
          회원가입
        </Button>
        <Button component={Link} to="/boardRegist" variant="outlined">
          새 글쓰기
        </Button>
      </div>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table style={styles.table} aria-label="게시글 목록">
          <TableHead style={styles.tableHead}>
            <TableRow>
              <TableCell style={styles.tableCell}>ID</TableCell>
              <TableCell style={styles.tableCell}>책 제목</TableCell>
              <TableCell style={styles.tableCell}>책 타이틀</TableCell>
              <TableCell style={styles.tableCell}>책 저자</TableCell>
              <TableCell style={styles.tableCell}>출판사</TableCell>
              <TableCell style={styles.tableCell}>책 목차</TableCell>
              <TableCell style={styles.tableCell}>책 소개</TableCell>
              <TableCell style={styles.tableCell}>책 이미지</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell style={styles.tableCell}>{book.id}</TableCell>
                <TableCell style={styles.tableCell}>{book.bookName}</TableCell>
                <TableCell style={styles.tableCell}>{book.bookTitle}</TableCell>
                <TableCell style={styles.tableCell}>{book.bookAuthor}</TableCell>
                <TableCell style={styles.tableCell}>{book.bookPublisher}</TableCell>
                <TableCell style={styles.tableCell}>{book.bookIndex}</TableCell>
                <TableCell style={styles.tableCell}>{book.bookIntroducing}</TableCell>
                <TableCell style={styles.tableCell}>{book.bookSignImage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Book;
