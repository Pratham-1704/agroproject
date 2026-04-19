import React from 'react';

const whyData = [
  {
    title: "Farm-to-Export Traceability",
    text: "Unlike many exporters, we work closely with farmers—giving you better control, consistent quality, and complete traceability of your products."
  },
  {
    title: "Consistency You Can Rely On",
    text: "We don’t just deliver quality once—we ensure the same standard in every shipment, helping buyers avoid risk and uncertainty."
  },
  {
    title: "Customized Packaging & Orders",
    text: "We adapt to your requirements—whether it’s packaging, labeling, or quantity—tailored for your specific market."
  },
  {
    title: "Long-Term Partnerships",
    text: "We don’t just supply products—we build lasting relationships by consistently delivering excellence and exceeding expectations."
  },
  {
    title: "Fast & Responsive Communication",
    text: "We ensure quick replies, updates, and clear communication at every stage of your order."
  },
  {
    title: "Ethical & Responsible Sourcing",
    text: "We support farmers and follow sustainable practices, ensuring both quality and responsibility."
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