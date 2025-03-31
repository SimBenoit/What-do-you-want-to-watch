import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Borpa from './components/Borpa';

const App = () => {
  return (
      <div style={{ marginLeft: '200px' }}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/borpa" element={<Borpa />} />
      </Routes>
      </div>
  );
};

export default App;