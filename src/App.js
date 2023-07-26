import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './container/header/Header';
import Footer from './container/footer/Footer';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register'

import Profile from './pages/profile/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;