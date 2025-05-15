import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  
  const isInCart = cartItems.some(item => item.id === plant.id);
  
  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <h3>{plant.name}</h3>
      <p className="plant-price">{plant.price.toFixed(2)} AZN</p>
      <button 
        className={`add-to-cart-btn ${isInCart ? 'disabled' : ''}`}
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? 'Səbətdədir' : 'Səbətə əlavə et'}
      </button>
    </div>
  );
};

export default PlantCard;