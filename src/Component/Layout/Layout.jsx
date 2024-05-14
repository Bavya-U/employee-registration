import React, { useState } from 'react';
import './Layout.css'; 
import { FaBars } from "react-icons/fa";
import logo from "../Asserts/logo.png"
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
     
      <div>
        <ul className={isOpen ? "navbar-navs active" : "navbar-navs"}>
        <div  className='navbar-left'>
            <img className='logo ' src={logo} alt="" />
            <h5 className='nav-para fw-bold'>Employee Registration</h5>
      </div>
        <li className="nav-items">
          <a href="/" className="nav-links">EmpFrom</a>
        </li>
        <li className="nav-items">
          <a href="/emptable" className="nav-links">EmpTable</a>
        </li>
        <li className="nav-items">
          <a href="/edit" className="nav-links">EmpUpdate</a>
        </li>
      
      </ul>
      </div>
     
    </nav>
  );
}

export default Layout;
