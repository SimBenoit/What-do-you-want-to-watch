import React, { useEffect, useState, Button, View } from 'react';

    import './App.css';
    const [items, setItems] = ButtonClicked([]);

    const  ButtonClicked = () =>{
      fetch('http://localhost:5000/api/items')
          .then((response) => response.json())
          .then((data) => setItems(data));
    }

    function App() {

      return (
        <div className="App">
          <header className="App-header">
          <img 
                src="Borpa.png" 
                alt="Rotating"
                className="App-logo"
            /> ceci n'est pas un borpa
            <h1>We exist in the context right now</h1>
          </header>
          <button className="App-title" onClick={() => ButtonClicked()}>There is nothing to worry about</button>
        </div>
      );
    }

    export default App;