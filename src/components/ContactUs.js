import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    products: [],
    description: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const productOptions = [
    'Green Chilli', 'Turmeric', 'Onion', 'Soyabean', 'Green Gram',
    'Black Gram'
  ];

  const productLabels = {
    'Green Chilli': 'Green Chilli',
    'Turmeric': 'Turmeric',
    'Onion': 'Onion',
    'Soyabean': 'Soyabean',
    'Green Gram': 'Green Gram',
    'Black Gram': 'Black Gram',
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (product) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      organization: '',
      phone: '',
      email: '',
      products: [],
      description: ''
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.custom-multiselect')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const selectedProductsText = formData.products.length > 0
    ? formData.products.map(p => productLabels[p]).join(', ')
    : 'Select products...';

  return (
    <section className="contact-us" id="contact-us">
      <div className="contact-us-container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-layout">
          <div className="contact-cards-column">
            <div className="contact-info-compact">
              <div className="contact-info-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h4>Sandhya Agro Pvt Ltd</h4>
                  <p>At lakhapur, Post, Daryapur, Thilori, Amravati, Maharashtra 444803</p>
                </div>
              </div>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.6988399443967!2d77.38472879999999!3d20.924432699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6c3ff79b92d7b%3A0x9ecc744dc12e004!2sSandhya%20Agro%20Exports!5e0!3m2!1sen!2sin!4v1776602922663!5m2!1sen!2sin"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sandhya Agro Location"
                />
                <a href="https://maps.app.goo.gl/H365VkyrttKqDLuL8?g_st=aw" target="_blank" rel="noopener noreferrer" className="map-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Open in Google Maps</span>
                </a>
              </div>
              <div className="contact-info-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:+919657711834">+91 8308771343</a></p>
                </div>
              </div>
              <div className="contact-info-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:sandhyaagro@gmail.com">sandhyaagro@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-info-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h4>Business Hours</h4>
                  <p>All 7 Days • 24 Hours Service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-column">
            <div className="contact-form-wrapper">
              <h3 className="contact-form-title">Send Us An Enquiry</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name <span className="required">*</span></label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="Your full name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="organization" className="form-label">Organization <span className="required">*</span></label>
                    <input type="text" id="organization" name="organization" className="form-input" placeholder="Organization name" value={formData.organization} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone <span className="required">*</span></label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email <span className="required">*</span></label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="your@email.com" value={formData.email} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Products</label>
                  <div className="custom-multiselect" id="product-dropdown">
                    <div className="multiselect-trigger" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      <span className="multiselect-placeholder">{selectedProductsText}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {isDropdownOpen && (
                      <div className="multiselect-dropdown">
                        {productOptions.map(option => (
                          <label key={option} className="multiselect-option">
                            <input
                              type="checkbox"
                              name="products"
                              value={option}
                              checked={formData.products.includes(option)}
                              onChange={() => handleProductChange(option)}
                            />
                            <span>{productLabels[option]}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description" className="form-label">Description <span className="required">*</span></label>
                  <textarea id="description" name="description" className="form-textarea" placeholder="Tell us about your requirements..." rows="3" value={formData.description} onChange={handleInputChange} required></textarea>
                </div>
                <button type="submit" className="form-submit-btn">
                  <span>Enquire Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
              {showSuccess && (
                <div className="form-success-message">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4>Thank You!</h4>
                  <p>Thank you for contacting us. We will get in touch with you soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
