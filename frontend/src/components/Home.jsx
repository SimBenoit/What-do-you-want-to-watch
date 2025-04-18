import React from "react";
import './Text.css';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="image-slider">
      <img src="SimonMontrealSnow.jpg" alt="image1" className="slide-image" />
      <img src="SimonCoffeeShop.jpg" alt="image2" className="slide-image" />
      <img src="SimonAirport.jpg" alt="image3" className="slide-image" />
      </div>
      <h1 className="title">Armin's den</h1>

      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Welcome to my website:</h2>
      <h3>Let me introduce myself, I'm Simon, a software engineer graduate from the École de Technologie Supérieure (or ÉTS for short) in Montreal, Canada! The name Armin's den comes from my usual online username and since I got this domain some years ago, I thought it would be about time to use it.</h3>
      <p>After graduating and spending a lot of time looking for work in the current markets and coming up empty handed, I realized that in my time searching I didnt take enough time to learn
      about the technologies I was using. So I decided to take a step back and take some time to truly put my hands at making some projects to show off.</p>
      <p>As such decided to make this website as a way to both dust off some programming skills and to show off those skills at the same time.</p>
      <p>For example the entire source code for this website (minus the secrets to deploy the containers) can be found on my Github!</p>
      <p>So welcome and feel free to take a look around.</p>
    </div>
  );
};

export default Home;
