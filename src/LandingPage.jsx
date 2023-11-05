import React, { useState } from 'react';

const foodItems = [
  // Add your food items here
  // Example: { id: 1, name: 'Food Item 1', category: 'Category 1', price: 10, img: 'image-path.jpg', quantity: 0 }
];

const LandingPage = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="landing-page">
      <header>
        <h1>Food Ordering Website</h1>
      </header>
      <section className="food-categories">
        {/* Add food categories */}
      </section>
      <section className="food-items">
        {foodItems.map(item => (
          <div key={item.id} className="food-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </section>
      <section className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? <p>Cart is empty</p> : 
          <ul>
            {cart.map(item => (
              <li key={item.id}>{item.name} - ${item.price} x {item.quantity}</li>
            ))}
          </ul>
        }
      </section>
    </div>
  );
};

export default LandingPage;
