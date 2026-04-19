import React, { useState, useEffect, useRef } from 'react';
import img1 from '../images/products/p1.jpeg';
import img2 from '../images/products/p2.jpeg';
import img3 from '../images/products/Onion.jpeg';
import img4 from '../images/products/Soyabean.jpeg';
import img5 from '../images/products/Greengram.png';
import img6 from '../images/products/Blackgram.png';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const trackRef = useRef(null);

  const images = [img1, img2, img3, img4, img5, img6];

  const products = [
    {
      name: 'Green Chilli',
      image: img1,
      alt: 'Premium Export Quality Green Chillies',
      description: '<strong>Green Chilli</strong><br><br><strong>Product Info</strong><br>Fresh, vibrant green chillies with high pungency, sourced from premium farms and handled under strict hygienic conditions for export markets.<br><br><strong>Specifications</strong><br><strong>Color:</strong> Bright Green<br><strong>Size:</strong> Medium to Long<br><strong>Pungency:</strong> High<br><strong>Freshness:</strong> Farm Fresh<br><br><strong>Packaging</strong><br>5 kg / 10 kg ventilated cartons<br>Plastic crates (as required)<br>Pre-cooling & cold storage maintained',
      export: false
    },
    {
      name: 'Turmeric',
      image: images[1],
      alt: 'Premium Export Quality Turmeric Rhizome',
      description: '<strong>Turmeric Fingers (Haldi)</strong><br><br><strong>Product Info</strong><br>High-quality turmeric fingers with rich color and strong aroma, carefully processed to meet international export standards.<br><br><strong>Specifications</strong><br><strong>Color:</strong> Yellow to Deep Golden<br><strong>Curcumin:</strong> 3% – 5%+<br><strong>Moisture:</strong> Max 10–12%<br><strong>Polish:</strong> Unpolished / Polished<br><br><strong>Packaging</strong><br>25 kg / 50 kg PP / Jute Bags<br>Food-grade packing',
      export: false
    },
    {
      name: 'Onion',
      image: images[2],
      alt: 'Premium Export Quality Onion',
     description: '<strong>Onion</strong><br><br><strong>Product Info</strong><br>Premium export-quality onions with uniform size, long shelf life, and excellent storage stability.<br><br><strong>Specifications</strong><br><strong>Color:</strong> Red / Pink<br><strong>Size:</strong> 40–70 mm<br><strong>Moisture:</strong> Low (good keeping quality)<br><strong>Shelf Life:</strong> Long (under proper storage)<br><br><strong>Packaging</strong><br>5 kg / 10 kg / 25 kg Mesh Bags<br>Jute bags (on request)<br>Ventilated packaging',
      export: false
    },
    {
      name: 'Soyabean',
      image: images[3],
      alt: 'Premium Export Quality Soyabean',
     description: '<strong>Soybean</strong><br><br><strong>Product Info</strong><br>High-grade soybeans with excellent protein content, properly cleaned and suitable for food and industrial use.<br><br><strong>Specifications</strong><br><strong>Protein:</strong> ~38% – 42%<br><strong>Moisture:</strong> Max 10%<br><strong>Size:</strong> Uniform (good grading preferred)<br><strong>Color:</strong> Natural Yellow, clean shine<br><strong>Purity:</strong> 98%+<br><br><strong>Packaging</strong><br>25 kg / 50 kg PP Bags<br>Bulk packing available',
      export: false
    },
    {
      name: 'Green Gram',
      image: images[4],
      alt: 'Premium Export Quality Green Gram',
      description: '<strong>Green Gram</strong><br><br><strong>Product Info</strong><br>Export-grade green gram with uniform size, natural shine, and high nutritional value.<br><br><strong>Specifications</strong><br><strong>Moisture:</strong> Max 12%<br><strong>Purity:</strong> 98%+<br><strong>Foreign Matter:</strong> <1%<br><strong>Color:</strong> Bright Green<br><br><strong>Packaging</strong><br>25 kg / 50 kg PP Bags<br>Bulk & private label options',
      export: false
    },
    {
      name: 'Black Gram',
      image: images[5],
      alt: 'Premium Export Quality Black Gram',
     description: '<strong>Black Gram</strong><br><br><strong>Product Info</strong><br>Premium quality black gram, well-cleaned and rich in nutrients, ideal for global consumption.<br><br><strong>Specifications</strong><br><strong>Moisture:</strong> Max 12%<br><strong>Purity:</strong> 98%+<br><strong>Foreign Matter:</strong> <1%<br><strong>Color:</strong> Natural Black<br><br><strong>Packaging</strong><br>25 kg / 50 kg PP Bags<br>Custom packaging available',
      export: false
    },
    {
      name: 'Kesar Lassi',
      image: images[0],
      alt: 'Kesar Lassi',
      description: 'Sandhya Agro\'s Kesar Lassi is a refreshing blend of fresh curd and aromatic saffron. Creamy, naturally sweet, and preservative-free, it\'s the perfect traditional drink for any occasion.<br><br>Available in 200ml.',
      export: false
    },
    {
      name: 'Masala Tak',
      image: images[1],
      alt: 'Masala Tak',
      description: 'Sandhya Agro\'s Masala Tak (Buttermilk) is a refreshing spiced drink made from fresh curd. Perfectly seasoned and preservative-free, it aids digestion and keeps you cool and hydrated.<br><br>Available in 200ml.',
      export: false
    },
    {
      name: 'Amrakhand',
      image: images[2],
      alt: 'Sandhya Agro Premium Amrakhand - Fresh Milk with Tropical Mango Sweetness',
      description: 'Sandhya Agro\'s Premium Amrakhand combines the richness of pure, fresh milk with the tropical sweetness of ripe mangoes. Nutritious, preservative-free, and offering a delightful homemade taste, it\'s a wholesome treat everyone will love.<br><br>Available in 250gm, 500gm, and 1000gm.',
      export: true
    },
    {
      name: 'Shrikhand',
      image: images[0],
      alt: 'Sandhya Agro Premium Shrikhand - Creamy Dessert with Badam and Pista',
      description: 'Sandhya Agro\'s Premium Shrikhand is a creamy dessert crafted from pure, nutritious curd and blended with the goodness of badam and pista. With its preservative-free, homemade taste, it delivers a healthy, traditional sweetness perfect for any occasion.<br><br>Available in 250gm, 500gm, and 1000gm.',
      export: true
    },
    {
      name: 'Butterscotch Milk',
      image: images[1],
      alt: 'Butterscotch Flavoured Milk',
      description: 'Sandhya Agro\'s Premium Butterscotch Milk brings together the rich sweetness of butterscotch and the freshness of pure milk. This creamy, delicious drink offers a perfect balance of sweetness, making it a delightful choice for any time of the day.<br><br>Available in 200ml.',
      export: true
    },
    {
      name: 'Chocolate Milk',
      image: images[2],
      alt: 'Chocolate Flavoured Milk',
      description: 'Sandhya Agro\'s Premium Chocolate Milk combines fresh, nutritious milk with rich, smooth chocolate. It\'s a creamy, enjoyable drink that\'s perfect for satisfying your chocolate cravings.<br><br>Available in 200ml.',
      export: true
    },
    {
      name: 'Badam Milk',
      image: images[0],
      alt: 'Badam Flavoured Milk',
      description: 'Sandhya Agro\'s Premium Badam Milk is made with fresh, high-quality milk and enriched with the natural goodness of almonds. This creamy and nutritious drink provides a deliciously smooth taste, perfect for a nourishing treat.<br><br>Available in 200ml.',
      export: true
    },
    {
      name: 'Coffee Milk',
      image: images[1],
      alt: 'Coffee Flavoured Milk',
      description: 'Sandhya Agro\'s Coffee Flavoured Milk offers the perfect blend of fresh cow milk and aromatic coffee. A refreshing, preservative-free beverage that energizes and delights.<br><br>Available in 200ml.',
      export: true
    },
    {
      name: 'Pista Milk',
      image: images[2],
      alt: 'Pista Flavoured Milk',
      description: 'Sandhya Agro\'s Premium Pista Milk is made with fresh, nutritious milk and mixed with the natural goodness of pista. This creamy, delicious drink offers a smooth, satisfying taste that\'s both refreshing and wholesome.<br><br>Available in 200ml.',
      export: true
    }
  ];

  const totalItems = products.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 480) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 768) {
        setItemsPerView(2);
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const goToPrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - itemsPerView));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + itemsPerView));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index * itemsPerView);
  };

  const totalDots = Math.ceil(totalItems / itemsPerView);

  return (
    <section className="products" id="products">
      <div className="products-container">
        <h2 className="section-title">Our Products</h2>
        <div className="carousel-wrapper">
          <button className="carousel-btn carousel-btn-prev" onClick={goToPrev} disabled={currentIndex === 0} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="carousel-track-container">
            <div className="carousel-track" ref={trackRef} style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
              {products.map((product, index) => (
                <div key={index} className="product-card-wrapper">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn carousel-btn-next" onClick={goToNext} disabled={currentIndex >= maxIndex} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="carousel-dots">
          {Array.from({ length: totalDots }, (_, i) => (
            <button
              key={i}
              className={`carousel-dot ${Math.floor(currentIndex / itemsPerView) === i ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`product-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="product-card-front">
        {product.export && <span className="export-tag">Available to Export</span>}
        <div className="product-image">
          <img src={product.image} alt={product.alt} />
        </div>
        <h3 className="product-name">{product.name}</h3>
        <button className="know-more-btn-card" onClick={() => setIsFlipped(true)}>Know More</button>
      </div>
      <div className="product-card-back">
        <h4>{product.name}</h4>
        <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
        <button className="back-btn-card" onClick={() => setIsFlipped(false)}>← Back</button>
      </div>
    </div>
  );
};

export default Products;