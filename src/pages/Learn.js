import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learn.css';

function Learn() {
  return (
    <div className="Learn">
      <div className="headerContainer">
        <h1>Learn about DWM</h1>
      </div>
      <div className="container">
        <div className="section">
          <h1>Awareness</h1>
          <Link to="/Awareness">
            <button>CLICK</button>
          </Link>
        </div>
        <div className="section">
          <h1>Behavioral Change</h1>
          <Link to="/Behavioral">
            <button>CLICK</button>
          </Link>
        </div>
        <div className="section">
          <h1>Community Engagement</h1>
          <Link to="/Community">
            <button>CLICK</button>
          </Link>
        </div>
        <div className="section">
          <h1>Infrastructure Improvement</h1>
          <Link to="/Infrastructure">
            <button>CLICK</button>
          </Link>
        </div>
        <div className="section">
          <h1>Technology and Innovation</h1>
          <Link to="/TechInvo">
            <button>CLICK</button>
          </Link>
        </div>
        <div className="section">
          <h1>Recycling program</h1>
          <Link to="/recycling">
            <button>CLICK</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Learn;
