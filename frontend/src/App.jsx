import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import Borpa from './components/Borpa';
import SocialLinks from './components/SocialLinks';
import './App.css';
import { useEffect, useState } from 'react';
import TodoComp from './components/TodoComp';


const App = () => {
  const [animate, setAnimate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Borpa />;
  }

  return (
    <div className="App">
      <div className="App-background"/>
      <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <aside className={`side-container ${isOpen ? 'open' : ''}`}>
      <Navbar />
      <SocialLinks />
      </aside>
        <div className={animate ? 'slide-in-once App-content' : 'App-content'} style={{ marginLeft: '220px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoComp />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
    </div>
  );
};

export default App;
