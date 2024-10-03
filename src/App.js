import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginModal from "./Components/LoginModal"; 
import About from "./Components/About"; 
import './Css/navbar.css';

const App = () => {
  return (
    <div>
          <section className='hero'>
            <h1>Welcome To Fixme</h1>
            <p>Learn and Play with our Interactive Game</p>
          </section>
    </div>
  );
};
export default App;
