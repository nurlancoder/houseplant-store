import * as actionTypes from './actionTypes';

// Səbətə əlavə etmək üçün action
export const addToCart = (plant) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: plant,
  };
};

// Səbətdəki bitkinin miqdarını artırmaq üçün action
export const increaseQuantity = (plantId) => {
  return {
    type: actionTypes.INCREASE_QUANTITY,
    payload: plantId,
  };
};

// Səbətdəki bitkinin miqdarını azaltmaq üçün action
export const decreaseQuantity = (plantId) => {
  return {
    type: actionTypes.DECREASE_QUANTITY,
    payload: plantId,
  };
};

// Bitkini səbətdən silmək üçün action
export const removeFromCart = (plantId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: plantId,
  };
};