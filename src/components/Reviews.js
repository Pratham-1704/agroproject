import React from 'react';

const sampleReviews = [
  {
    name: 'Ravi Kumar',
    role: 'Trader, Chennai',
    rating: 5,
    text: 'Great quality and fast delivery. Highly recommended for bulk buyers.'
  },
  {
    name: 'Anita Sharma',
    role: 'Chef, Delhi',
    rating: 4,
    text: 'Spices are aromatic and consistent. Will order again.'
  },
  {
    name: 'S. Patel',
    role: 'Importer, UAE',
    rating: 5,
    text: 'Professional communication and good packaging. Smooth export experience.'
  }
];

const Stars = ({ count = 5 }) => (
  <span className="review-stars" aria-hidden>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="#C9A227" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.417 8.264L12 19.771 4.583 23.86 6 15.596 0 9.748l8.332-1.73L12 .587z" />
      </svg>
    ))}
  </span>
);

const Reviews = ({ reviews = sampleReviews }) => {
  return (
    <section className="reviews" id="reviews">
      <h2 className="section-title">Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="review-header">
              <div className="reviewer">{r.name}</div>
              <div className="review-role">{r.role}</div>
            </div>
            <div className="review-body">
              <Stars count={r.rating} />
              <p className="review-text">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
