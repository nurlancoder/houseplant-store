import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-price">{item.price.toFixed(2)} AZN</p>
      </div>
      
      <div className="cart-item-controls">
        <button 
          className="quantity-btn"
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          <FaMinus />
        </button>
        
        <span className="item-quantity">{item.quantity}</span>
        
        <button 
          className="quantity-btn"
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          <FaPlus />
        </button>
        
        <button 
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;