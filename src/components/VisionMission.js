import React from 'react';
import img1 from '../images/products/mission.png';
import img2 from '../images/products/vision.png';


const VisionMission = () => {
  return (
    <section className="vision-mission" id="vision-mission">
      <div className="vision-mission-container">
        <h2 className="section-title">Vision & Mission</h2>
        
        <div className="vision-block">
          <div className="vm-text">
            <h3 className="vm-subtitle">Our Vision</h3>
           <p>To become a globally trusted exporter of premium agricultural products from India, delivering quality, sustainability, and value to customers worldwide.</p>  
          </div>
          <div className="vm-image">
            <img src={img2} alt="Sandhya Agro Vision - Leading Provider of High-Quality Dairy Products" />
          </div>
        </div>
        
        <div className="mission-block">
          <div className="vm-image">
            <img src={img1} alt="Sandhya Agro Mission - Exceeding Customer Expectations in Dairy Quality" />
          </div>
          <div className="vm-text">
            <h3 className="vm-subtitle">Our Mission</h3>
            <p>To source the finest agricultural products directly from farmers and deliver them to international markets with high quality standards, ethical practices, and reliable export services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
