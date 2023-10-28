import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Learnn() {
  return (
    <div className='Learnn'>
        <div className="hiddenLinks">
      <Link to="/Awareness">Awareness</Link>
      <Link to="/Behavioural">Behavioural</Link>
      <Link to="/Community">Community</Link>
      <Link to="/Infrastructure">Infrastructure</Link>
      <Link to="/TechInvo">TechInvo</Link>
      <Link to="/recycling">recycling</Link>
    </div>
    </div>
  );
}

export default Learnn;
