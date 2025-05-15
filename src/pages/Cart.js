import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import './Cart.css';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const totalItems = useSelector(state => state.totalItems);
  const totalCost = useSelector(state => state.totalCost);
  
  return (
    <div className="cart-container">
      <h1>Alış-veriş Səbəti</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Səbətiniz boşdur.</p>
          <Link to="/products" className="continue-shopping-btn">Alış-verişə davam et</Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <p>Ümumi məhsul: <span>{totalItems}</span></p>
            <p>Ümumi məbləğ: <span>{totalCost.toFixed(2)} AZN</span></p>
          </div>
          
          <div className="cart-items">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="cart-actions">
            <Link to="/products" className="continue-shopping-btn">Alış-verişə davam et</Link>
            <button className="checkout-btn" onClick={() => alert("Bu funksiya tezliklə əlavə olunacaq!")}>
              Sifarişi tamamla
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;