// src/Components/Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import yourImage from "../Asset/Fixme.png"; // Ensure this is correct

const Navbar = ({ onLoginClick }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <nav className="navbar">
      <img 
        src={yourImage} 
        alt="Fixme Logo" 
        className="navbar-image" 
        onClick={handleLogoClick} 
        style={{ cursor: 'pointer' }} // Change cursor to pointer for better UX
      />
      <ul className="navbar-list">
        <li>
          <button className="btn" onClick={() => navigate("/about")}>About Us</button>
        </li>
        <li>
          <button className="btn" onClick={onLoginClick}>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
