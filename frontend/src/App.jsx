import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Borpa from './components/Borpa';
import SocialLinks from './components/SocialLinks';
import './App.css';
import { useEffect, useState } from 'react';
import TodoComp from './components/TodoComp';


const App = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // trigger animation on mount
  }, []);

  return (
    <div className="App">
      <div className="App-background"/>
        <Navbar/>
        <SocialLinks/>
        <div className={animate ? 'slide-in-once App-content' : 'App-content'} style={{ marginLeft: '220px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/borpa" element={<Borpa />} />
            <Route path="/todo" element={<TodoComp />} />
          </Routes>
        </div>
    </div>
  );
};

export default App;
