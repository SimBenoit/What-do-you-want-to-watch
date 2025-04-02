import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav">
      <div className="circle-wrapper">
      <img src="SimonPictureGradRing.jpg" alt="Profile"/>
      </div>
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
        <li>
          <button
            onClick={() => navigate('/todo')}
            className={isActive('/todo') ? 'nav-button active' : 'nav-button'}
          >
            TODO
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
