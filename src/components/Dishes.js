import React, { useEffect } from 'react';
import './Dishes.css';

const dishes = [
  {
    image: '/images/gril.jpg',
    title: 'Grilled Salmon',
    rating: 5,
  },
  {
    image: '/images/paneer.png',
    title: 'Paneer Tikka',
    rating: 5,
  },
  {
    image: '/images/fruit.jpg',
    title: 'Fruit Salad',
    rating: 4,
  },
  {
    image: '/images/starters.jpg',
    title: 'Hot Starters',
    rating: 5,
  },
  {
    image: '/images/dark.jpg',
    title: 'Dark Sweets',
    rating: 4,
  },
  {
    image: '/images/sweet.jpg',
    title: 'Delicious Sweets',
    rating: 4,
  },
  {
    image: '/images/sand.jpeg',
    title: 'Sandwich',
    rating: 4,
  },
  {
    image: '/images/t.jpg',
    title: 'Tomato Soup',
    rating: 4,
  },
];

const Dishes = () => {
  const backgroundStyle = {
    
    backgroundSize: 'cover',
    padding: '100px 40px',
    position: 'relative',
  };

  useEffect(() => {
    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 150 * index);
    });
  }, []);

  return (
    <section className="popular-dishes-section" style={backgroundStyle}>
      <div className="tomato-decoration">
        <img src="/images/b-g.png" alt="Tomato Decor" />
      </div>
      <div className="container">
        <p className="sub-heading">--- Offer Zone ---</p>
        <h2 className="section-title">Popular Dishes Of Our's</h2>
        <div className="dishes-grid">
          {dishes.map((dish, index) => (
            <div className="dish-card" key={index}>
              <div className="dish-image-container">
                <img src={dish.image} alt={dish.title} className="dish-image" />
              </div>
              <div className="dish-info">
                <div className="dish-title-price">
                  <h4>{dish.title}</h4>
                </div>
                <div className="rating">
                  {'★'.repeat(dish.rating)}
                  {'☆'.repeat(5 - dish.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
