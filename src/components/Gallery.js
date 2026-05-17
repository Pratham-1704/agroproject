import React from 'react';
import greenChilli from '../images/products/p1.jpeg';
import turmeric from '../images/products/p2.jpeg';
import onion from '../images/products/Onion.jpeg';
import soyabean from '../images/products/Soyabean.jpeg';
import greenGram from '../images/products/Greengram.png';
import blackGram from '../images/products/Blackgram.png';
import p3 from '../images/products/p3.jpeg';
import p4 from '../images/products/p4.png';

const galleryImages = [
  { src: greenChilli, alt: 'Green Chilli Product Photo', caption: 'Green Chilli' },
  { src: turmeric, alt: 'Turmeric Product Photo', caption: 'Turmeric' },
  { src: onion, alt: 'Onion Product Photo', caption: 'Onion' },
  { src: soyabean, alt: 'Soyabean Product Photo', caption: 'Soyabean' },
  { src: greenGram, alt: 'Green Gram Product Photo', caption: 'Green Gram' },
  { src: blackGram, alt: 'Black Gram Product Photo', caption: 'Black Gram' },
  { src: p3, alt: 'Product Photo 3', caption: 'Product Photo' },
  { src: p4, alt: 'Product Photo 4', caption: 'Product Photo' }
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Product Photo Gallery</h2>
        <p className="gallery-description">
          Browse real product photos showing our fresh produce and export-ready packaging.
        </p>
        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.src} alt={item.alt} className="gallery-image" />
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
