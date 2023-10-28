import React from 'react';
import {Link} from 'react-router-dom';


function recycling() {
  return (
    <div className="recycling">
        <header>
            <h1>Domestic waste recycling program</h1>
        </header>
        <div className="content">
        <section className="recycle-info">
          <h2>Why Recycle?</h2>
          <p>
            Recycling helps protect the environment by reducing waste and conserving resources. Learn more about the benefits of recycling.
          </p>
          <Link to="/recycle">Learn More</Link>
        </section>

        <section className="recycling-options">
          <h2>Recycling Options</h2>
          <p>
            Explore the various recycling options available in your area, including curbside pickup, drop-off centers, and hazardous waste disposal.
          </p>
          <Link to="/roption">View Options</Link>
        </section>

        <section className="recycling-schedule">
          <h2>Recycling Schedule</h2>
          <p>
            Find your local recycling schedule and never miss a recycling pickup day.
          </p>
          <Link to="/schedule">Check Schedule</Link>
        </section>
        
      </div>
    </div>
  );
}

export default recycling;
