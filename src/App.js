// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginModal from "./Components/LoginModal"; 
import About from "./Components/About"; 
import './Css/navbar.css';

const App = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {location.pathname !== '/login' && <Navbar onLoginClick={openModal} />}
      <Routes>
        <Route path="/" element={
          <section className='hero'>
            <h1>Welcome To Fixme</h1>
            <p>Learn and Play with our Interactive Game</p>
          </section>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
