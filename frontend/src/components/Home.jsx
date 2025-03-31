import React from "react";
import './Text.css'; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <div>
      <h1 className="title">Armin's den</h1>

      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Welcome to my website:</h2>
      <h3>Let me introduce myself, I'm Simon, a software engineer graduate from the École de Technologie Supérieure (or ÉTS for short) in Montreal, Canada!</h3>
      <p>After graduating and spending a lot of time looking for work in the current markets and coming up empty handed, I realized that in my time searching I didnt take enough time to learn
      about the technologies I was using. So I decided to take a step back and take some time to truly put my hands at making some projects to show off.</p>
      <p>As such decided to make this website as a way to both dust off some programming skills and to show off those skills at the same time.</p>
      <p>For example the entire source code for this website (minus the secrets to deploy the containers) can be found on my Github!</p>
      <p>So welcome and feel free to take a look around.</p>
    </div>
  );
};

export default Home;
