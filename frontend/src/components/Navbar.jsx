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
      <h3>Simon Benoit</h3>
      <h4>Software Engineer</h4>
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
            onClick={() => navigate('/todo')}
            className={isActive('/todo') ? 'nav-button active' : 'nav-button'}
          >
            TODO
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/jetwatch')}
            className={isActive('/jetwatch') ? 'nav-button active' : 'nav-button'}
          >
            Jetwatch
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/contact')}
            className={isActive('/contact') ? 'nav-button active' : 'nav-button'}
          >
            Contact me
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
