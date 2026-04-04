import React from 'react';

const whyData = [
  {
    title: "Farm-to-Export Traceability",
    text: "We work directly with farmers and sourcing partners, ensuring complete traceability from cultivation to export. This guarantees authenticity, quality, and trust in every shipment."
  },
  {
    title: "Consistency You Can Rely On",
    text: "Strict quality control at every stage ensures uniform quality across all orders, helping you avoid risks and maintain trust in international markets."
  },
  {
    title: "Customized Packaging & Orders",
    text: "We provide flexible packaging, labeling, and order solutions including private labeling, bulk supply, and retail-ready formats tailored to your needs."
  },
  {
    title: "Long-Term Partnerships",
    text: "We focus on building lasting relationships by understanding your business needs and delivering consistent value beyond transactions."
  },
  {
    title: "Fast & Responsive Communication",
    text: "Our team ensures quick responses, regular updates, and clear communication from inquiry to delivery."
  },
  {
    title: "Ethical & Responsible Sourcing",
    text: "We support farmers and follow ethical sourcing practices, ensuring sustainability and fair trade in every product."
  }
];

const WhyUs = () => {
  return (
    <section className="why-us" id="why-us">
      <div className="why-us-container">
        <h2 className="section-title">Why Choose Sandhya Agro Exports</h2>

        <div className="why-us-cards">
          {whyData.map((item, index) => (
            <div className="why-card" key={index}>
              
              <div className="why-card-icon">
                <span>{index + 1}</span>
              </div>

              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-text">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;