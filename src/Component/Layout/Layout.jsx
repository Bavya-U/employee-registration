import React, { useState } from 'react';
import './Layout.css'; 
import { FaBars } from "react-icons/fa";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="toggle-button" onClick={toggleNavbar}>
        <FaBars />
      </button>
      <ul className={isOpen ? "navbar-nav active" : "navbar-nav"}>
        <li className="nav-item">
          <a href="/" className="nav-link">EmpFrom</a>
        </li>
        <li className="nav-item">
          <a href="/emptable" className="nav-link">EmpTable</a>
        </li>
        <li className="nav-item">
          <a href="/update" className="nav-link">EmpUpdate</a>
        </li>
      
      </ul>
    </nav>
  );
}

export default Layout;
