import React from 'react';
import DynamicImage from "./DynamicImage"
import './Borpa.css';
import '../App.css';


  function Borpa() {

    return (
      <div className='App-background'>
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
