import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import './Checkout.css';
export const Checkout = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
<div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>
      <div className="checkout-content">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <h3>Total:Tk{totalAmount}</h3>
        </div>
        <div className="payment-details">
          <h2>Payment Details</h2>
          <form>
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" required />
            <label htmlFor="name">Name on Card</label>
            <input type="text" id="name" required />
            <div className="card-info">
              <div className="card-expiry">
                <label htmlFor="expiry">Expiry Date</label>
                <input type="text" id="expiry" required />
              </div>
              <div className="card-cvv">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" required />
              </div>
            </div>
            <button className="buttontt" type="submit">Complete Purchase</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
