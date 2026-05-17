import React, { useState } from 'react';

const defaultFaqs = [
  {
    q: 'What are your main products?',
    a: 'We supply a range of agricultural products including turmeric, spices, and pulses. Visit the Products section for details.'
  },
  {
    q: 'Do you export internationally?',
    a: 'Yes — we export to multiple countries. For export enquiries, please check the Export section or contact us directly.'
  },
  {
    q: 'How can I place a bulk order?',
    a: 'Use the Contact Us form or message us on WhatsApp using the floating button — include product, quantity, and delivery location.'
  },
  {
    q: 'Do you provide samples?',
    a: 'Samples can be arranged for prospective buyers. Reach out through the contact form to request sample details.'
  }
];

const FAQ = ({ faqs = defaultFaqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq" id="faq">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((item, i) => (
          <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
            <button className="faq-question" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
              <span>{item.q}</span>
              <span className="faq-toggle">{openIndex === i ? '−' : '+'}</span>
            </button>
            <div className="faq-answer" style={{ maxHeight: openIndex === i ? '400px' : '0' }} aria-hidden={openIndex !== i}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
