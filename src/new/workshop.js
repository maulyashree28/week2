import React from 'react';
import '../styles/workshop.css';

function Workshop() {
  const workshops = [
    { title: 'Workshop 1', date: 'January 15, 2024' },
    { title: 'Workshop 2', date: 'February 10, 2024' },
    { title: 'Workshop 3', date: 'March 5, 2024' },
    // Add more workshop entries as needed
  ];

  return (
    <div className="workshop-container">
      <h1>Upcoming Workshops</h1>
      <ul>
        {workshops.map((workshop, index) => (
          <li key={index}>
            {workshop.title} - Date: {workshop.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workshop;
