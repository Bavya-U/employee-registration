import React, { useState } from 'react';
import './Layout.css'; 
import { FaBars } from "react-icons/fa";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbars">
      <button className="toggle-button" onClick={toggleNavbar}>
        <FaBars />
      </button>
      <ul className={isOpen ? "navbar-navs active" : "navbar-navs"}>
        <li className="nav-items">
          <a href="/" className="nav-links">EmpFrom</a>
        </li>
        <li className="nav-items">
          <a href="/emptable" className="nav-links">EmpTable</a>
        </li>
        <li className="nav-items">
          <a href="/update" className="nav-links">EmpUpdate</a>
        </li>
      
      </ul>
    </nav>
  );
}

export default Layout;
