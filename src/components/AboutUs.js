import React from 'react';
// import './Aboutus.css';

const AboutUs = () => {
    return (

        
        <section className="about-us" id="about-us">
            <div className="about-us-container">
                <h2 className="section-title">About Us</h2>
                <div className="about-us-content">
                    <div className="about-us-text">
                        <p>Sandhya Agro Exports is a trusted agricultural export company committed to delivering high-quality farm 
                            products from India to global markets.
                             We work closely with farmers and reliable suppliers to source 
                             premium agricultural commodities that meet international quality standards.

                             Our focus is on maintaining purity, freshness, and consistency in every shipment. 
                             With strong supply chain management and ethical sourcing practices, we ensure that our customers receive the best agricultural products with timely and reliable export services.

                             At Sandhya Agro Exports, we believe in building long-term relationships with our customers by providing quality products, transparent business practices, and competitive pricing.</p>
                    </div>
                    <div className="about-us-image">
                        <img src="./img.jpg" alt="Sandhya Agro - About Us - Premium Dairy Products Manufacturer Since 1985" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
