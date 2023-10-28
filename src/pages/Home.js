import React from 'react';
import BannerImage from '../assets/img2.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer" >
        <h1>Domestic Waste Management</h1>
        <p>Domestic waste is any waste that is produced in the home environment.</p>
        </div>
    </div>
  );
  
  }

export default Home;