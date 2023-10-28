import React from 'react';
import '../styles/schedule.css';

function schedule() {
    const schedule = [
        { day: 'Monday', material: 'Paper' },
        { day: 'Tuesday', material: 'Plastic' },
        { day: 'Wednesday', material: 'Glass' },
        { day: 'Thursday', material: 'Organic' },
        { day: 'Friday', material: 'Organic' },
      ];
      return (
        <div className="schedule">
          <h1>Recycling Schedule</h1>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Material</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  <td>{item.material}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

export default schedule;
