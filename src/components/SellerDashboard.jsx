import React from 'react';
import './SellerDashboard.css';
const SellerDashboard = () => {
  return (
    <div className="seller-dashboard">
      <h2>Seller Dashboard</h2>

      {/* Form to add new items */}
      <form className="add-item-form">
        <input type="text" placeholder="Item Name" />
        <input type="text" placeholder="Item Price" />
        <input type="file" />
        <button type="submit">Add Item</button>
      </form>

      {/* Cards for existing items */}
      <div className="item-cards">
        <div className="item-card">
          <img src='https://st3.depositphotos.com/1194063/15070/i/450/depositphotos_150709644-stock-photo-various-herbs-and-spices.jpg'
 alt="Item" />
          <h3>Item Name</h3>
          <p>Price: Tk10</p>
          <button>Update Price</button>
          <button>Remove</button>
        </div>
        {/* Add more item cards here */}
      </div>
    </div>
  );
};

export default SellerDashboard;
