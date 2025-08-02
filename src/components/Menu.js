import React, { useState } from 'react';
import './Menu.css';

const categories = ["Starters", "Main Course", "Desserts", "Drinks"];

const menuItems = [
 
  { name: "Paneer Tikka", image: "/menu/bruschetta.png", category: "Starters" },
  { name: "Veg Samosa", image: "/menu/spring-rolls.png", category: "Starters" },
  { name: "Aloo Tikki", image: "/menu/grilled-chicken.png", category: "Starters" },
  { name: "Masala Papad", image: "/menu/pasta-alfredo.png", category: "Starters" },
  { name: "Apollo Fish Fry", image: "/menu/fish.png", category: "Starters" },
  { name: "Hara Bhara Kabab", image: "/menu/royal-platter.png", category: "Starters" },

  
  { name: "Butter Chicken", image: "/menu/grilled-chicken1.png", category: "Main Course" },
  { name: "Palak Paneer", image: "/menu/lava-cake.png", category: "Main Course" },
  { name: "Biryani", image: "/menu/biryani.png", category: "Main Course" },
  { name: "Dal Makhani", image: "/menu/Dal Makhan.png", category: "Main Course" },
  { name: "Mutton Biryani", image: "/menu/mutton.png", category: "Main Course" },
  { name: "Paneer Butter Masala", image: "/menu/Paneer.png", category: "Main Course" },


  { name: "Gulab Jamun", image: "/menu/Gulab Jamun.png", category: "Desserts" },
  { name: "Rasgulla", image: "/menu/Rasgulla.png", category: "Desserts" },
  { name: "Kaju Barfi", image: "/menu/Kaju Katli.png", category: "Desserts" },
  { name: "Jalebi", image: "/menu/Jalebi.png", category: "Desserts" },
  { name: "Kulfi", image: "/menu/Kulfi.png", category: "Desserts" },
  { name: "Apricot delight", image: "/menu/delite.png", category: "Desserts" },

  
  { name: "Juice", image: "/menu/juice.jpeg", category: "Drinks" },
  { name: "Apple", image: "/menu/apple.jpg", category: "Drinks" },
  { name: "Crispy Water", image: "/menu/crispy.jpg", category: "Drinks" },
  { name: "Lemon", image: "/menu/lemon.jpg", category: "Drinks" },
  { name: "Coffee", image: "/menu/hot.jpg", category: "Drinks" },
  { name: "Cool drinks", image: "/menu/drink.png", category: "Drinks" },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Starters");

  const backgroundStyle = {
    backgroundImage: "url('/menu/bg-menu.jpg')",
    backgroundAttachment: 'fixed', // <-- This makes it fixed
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '60px 20px',
  };
  

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-container" style={backgroundStyle} id='menu'>
      <div className="menu-heading">
        <p>— Explore Our Cuisine —</p>
        <h2><span>"Authentic Flavors,</span> Served On Every Plate”</h2>
        <div className="menu-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-grid">
        {filteredItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="card-content">
              <h4>{item.name}</h4>
              <p>Traditional recipe, served with care.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
