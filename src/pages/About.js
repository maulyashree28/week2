import React from 'react';
import Image from '../assets/img 3.jpg';
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${Image})` }}></div>
      <div className="aboutBottom">
      <h1> ABOUT US</h1>
      <p>
        
      </p>
    </div>
    </div>
  );
}

export default About;
