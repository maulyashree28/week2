import React from 'react';
import Img from '../assets/img4.jpg';
import '../styles/roption.css';

 
 function roption() {
   return (
     <div className="roption"  >
        <header>
            <h1>Recycling options</h1>
        </header>
        <div className="content">
        <p>
          Some common recycling options:
        </p>
        <ul>
          <li>Paper Recycling</li>
          <p>The process of waste paper recycling most often involves mixing used/old paper with water and chemicals to break it down. It is then chopped up and heated, which breaks it down further into strands of cellulose, a type of organic plant material; this resulting mixture is called pulp, or slurry</p>
          <li>Plastic recycling</li>
          <p>Plastic recycling is the processing of plastic waste into other products.Recycling can reduce dependence on landfill, conserve resources and protect the environment from plastic pollution and greenhouse gas emissions.</p>
          <li>Glass Recycling</li>
          <p>
          Glass recycling is the processing of waste glass into usable products. Glass that is crushed or imploded and ready to be remelted is called cullet. External cullet is waste glass that has been collected or reprocessed with the purpose of recycling. External cullet is classified as waste.
          </p>
          <li>Organic Recycling</li>
         <p>Organics recycling refers to the closed loop of activities involved in the collection and processing of organic materials as well as the use of a recycled product compost.</p>
        </ul>
        <img src={Img} alt="Organic Recycling Image" />
      </div>
     </div>
   );
 }
 
 export default roption;
 
