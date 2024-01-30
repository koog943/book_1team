import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import AdminMain from './pages/AdminMain';
import CreateBook from './pages/CreateBook';
import UpdateBook from './pages/UpdateBook';

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
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
