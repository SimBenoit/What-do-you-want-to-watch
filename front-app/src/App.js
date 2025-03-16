import React, { useEffect, useState } from 'react';
    import './App.css';

    function App() {
      const [items, setItems] = useState([]);

      useEffect(() => {
        fetch('http://localhost:5000/api/items')
          .then((response) => response.json())
          .then((data) => setItems(data));
      }, []);

      return (
        <div className="App">
          <header className="App-header">
          <img 
                src="Borpa.png" 
                alt="Rotating"
                className="App-logo"
            />
            <h1>This is the list of items wowie</h1>
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </header>
        </div>
      );
    }

    export default App;