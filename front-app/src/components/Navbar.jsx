import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  // For styling

const Navbar = () => {
  return (
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/borpa">Borpa</Link></li>
          </ul>
        </nav>
  );
};

export default Navbar;