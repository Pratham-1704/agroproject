import React from 'react';
import img1 from '../images/productgallery/img1.png';
import img2 from '../images/productgallery/img2.jpg';
import img3 from '../images/productgallery/img3.jpg';
import img4 from '../images/productgallery/img4.jpg';
import img5 from '../images/productgallery/img5.jpg';
import img6 from '../images/productgallery/img6.jpg';
import img7 from '../images/productgallery/img7.jpg';
import img8 from '../images/productgallery/img8.jpg';
import img9 from '../images/productgallery/img9.jpg';
import img10 from '../images/productgallery/img10.jpg';
import img11 from '../images/productgallery/img11.jpg';
import img12 from '../images/productgallery/IMG12.jpg';
import img13 from '../images/productgallery/IMG13.jpg';
import img14 from '../images/productgallery/IMG14.jpeg';
import img15 from '../images/productgallery/img15.jpeg';
import img16 from '../images/productgallery/img16.jpeg';

const galleryImages = [
  { src: img1, alt: 'Product gallery image 1' },
  { src: img2, alt: 'Product gallery image 2' },
  { src: img3, alt: 'Product gallery image 3' },
  { src: img4, alt: 'Product gallery image 4' },
  { src: img5, alt: 'Product gallery image 5' },
  { src: img6, alt: 'Product gallery image 6' },
  { src: img7, alt: 'Product gallery image 7' },
  { src: img8, alt: 'Product gallery image 8' },
  { src: img9, alt: 'Product gallery image 9' },
  { src: img14, alt: 'Product gallery image 14' },
  { src: img10, alt: 'Product gallery image 10' },
  { src: img11, alt: 'Product gallery image 11' },
  { src: img12, alt: 'Product gallery image 12' },
  { src: img13, alt: 'Product gallery image 13' },
  { src: img15, alt: 'Product gallery image 15' },
  { src: img16, alt: 'Product gallery image 16' }
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
