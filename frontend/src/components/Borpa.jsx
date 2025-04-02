import React from 'react';
import DynamicImage from "./DynamicImage"
import './Borpa.css';  // Import the CSS file for styling


  function Borpa() {

    return (
      <div>
        <header className="borpa-header">
        <DynamicImage
        link={"Borpa.png"}
        />
          <h1>We exist in the context right now</h1>
        </header>
      </div>
    );
  }


  export default Borpa;
