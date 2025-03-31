import React, { useState } from 'react';
import DynamicImage from "./DynamicImage"
import './Borpa.css';  // Import the CSS file for styling


  function Borpa() {
    const [imageSrc, setImageSrc] = useState("Borpa.png");

    const changeImage = (newSource) => {
      setImageSrc(newSource);  // New image URL
    };

    const  ButtonClicked = async () =>{
      try {
        const response = await fetch('http://localhost:5000/api/items');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);  // Print to console
        changeImage(result.name);
      } catch (error) {
        console.error('Error:', error);
      }
    };


    return (
      <div>
        <header className="borpa-header">
        <DynamicImage
        link={imageSrc}
        />
          <h1>We exist in the context right now</h1>
        </header>
        <button className="borpa-title" onClick={() => ButtonClicked()}>There is nothing to worry about</button>
      </div>
    );
  }


  export default Borpa;
