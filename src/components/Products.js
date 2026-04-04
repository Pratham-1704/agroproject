import React, { useState, useEffect, useRef } from 'react';
import img1 from '../images/products/p1.jpeg';
import img2 from '../images/products/p2.jpeg';
import img3 from '../images/products/p3.jpeg';



const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const trackRef = useRef(null);

  const images = [img1, img2, img3];

  const products = [
    {
      name: 'Premium Chilies',
      image: img1,
      alt: 'Sandhya Agro Premium Milk - Pure Fresh Pasteurized Homogenized Toned Milk',
      description: 'Sandhya Agro Premium Milk is pure, fresh, and full of goodness! Pasteurized and homogenized toned milk, delivering the perfect balance of nutrition and taste. Packed with essential vitamins and minerals. Enjoy milk that\'s safe, creamy, and delicious.<br><br>Available in 200ml, 500ml, and 1 liter sizes.',
      export: false
    },
    {
      name: 'Premium Turmeric',
      image: images[1],
      alt: 'Sandhya Agro Special Milk - Enhanced Creaminess and Nutrition from Pure Cow Milk',
      description: 'Sandhya Agro\'s Special Milk offers enhanced creaminess and nutrition, perfect for those who want extra richness. Made from pure cow milk with no additives or preservatives.<br><br>Available in 200ml, 500ml, and 1 liter sizes.',
      export: false
    },
    {
      name: 'Premium Fresh Curd',
      image: images[2],
      alt: 'Sandhya Agro Premium Fresh Curd - Natural Culturing Methods Preservative-Free',
      description: 'Sandhya Agro\'s Premium Fresh Curd is prepared from pure, fresh milk using natural culturing methods to achieve a thick, smooth texture. Preservative-free and gently set, it offers a balanced taste and wholesome freshness for everyday consumption.<br><br>Available in 200gm, 500gm, and 1000gm.',
      export: false
    },
    {
      name: 'Malai Paneer',
      image: images[0],
      alt: 'Sandhya Agro Premium Malai Paneer - Soft Creamy Texture Rich in Protein',
      description: 'Sandhya Agro\'s Premium Malai Paneer is made from fresh milk, ensuring softness, a creamy texture, and a rich source of protein in every bite. With its preservative-free, homemade taste, this paneer is perfect for a variety of dishes and a healthy choice for your kitchen.<br><br>Available in 200gm, 500gm, and 1000gm.',
      export: false
    },
    {
      name: 'Low Fat Paneer',
      image: images[1],
      alt: 'Sandhya Agro Low Fat Paneer - Protein-Rich Light Healthy Alternative',
      description: 'Sandhya Agro\'s Low Fat Paneer is made from fresh milk using carefully controlled processes to reduce fat while maintaining softness and taste. Light, protein-rich, and preservative-free, it offers a healthier alternative for everyday meals without compromising on texture or quality.<br><br>Available in 200gm, 500gm, and 1000gm.',
      export: true
    },
    {
      name: 'Pure Ghee',
      image: images[2],
      alt: 'Sandhya Agro Premium Cow Ghee - Pure Cow Milk Rich Aroma Authentic Taste',
      description: 'Sandhya Agro\'s Premium Cow Ghee is prepared from pure cow milk, offering a rich aroma, smooth texture, and authentic taste. Free from preservatives, it delivers traditional goodness and natural richness ideal for everyday cooking and special recipes.<br><br>Available in 200ml, 500ml, and 1000ml.',
      export: true
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