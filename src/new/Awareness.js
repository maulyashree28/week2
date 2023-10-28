import React from 'react';
import{Link} from 'react-router-dom';
import '../styles/Awareness.css';

function Awareness() {
  return (
    <div className="Awareness" >
      <div className="headerContainer" >
        <h1>Waste Management Awareness</h1>
        <p>Domestic waste management is a pressing issue that demands greater awareness and responsible practices. The exponential increase in household waste generation has far-reaching implications for our environment, health, and overall well-being. With expanding urban populations and changing consumer habits, it is imperative that we comprehend the significance of reducing, reusing, and recycling our waste. By adopting these principles, we can alleviate the stress on landfills and conserve vital resources, thus reducing our ecological footprint.

Furthermore, raising awareness about waste segregation and proper disposal is crucial in this endeavor. The practice of categorizing waste into organic, recyclable, and non-recyclable materials at the source can significantly enhance the efficiency of waste management systems. Additionally, promoting composting in households not only diverts organic waste from landfills but also enriches the soil for agriculture and gardening. Ultimately, heightened awareness and responsible waste management at the domestic level are integral to building a sustainable, cleaner, and healthier future for our planet and its inhabitants.</p>
<iframe
          width="560"  
          height="315"
          src="https://www.youtube.com/embed/4JDGFNoY-rQ"  
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"  
          height="315"
          src="https://www.youtube.com/embed/29OFyXJC_uA"  
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="container">
  <div className="section">
  <h2>Workshop</h2>
    <div className="subheading">
      <Link to="/workshop">
        <button>CLICK</button>
      </Link>
    </div>
  </div>
</div>
    </div>
    </div>
  );
  
  }

export default Awareness;
