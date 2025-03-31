import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav">
      <ul>
        <li>
          <button
            onClick={() => navigate('/')}
            className={isActive('/') ? 'nav-button active' : 'nav-button'}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/borpa')}
            className={isActive('/borpa') ? 'nav-button active' : 'nav-button'}
          >
            Borpa
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
