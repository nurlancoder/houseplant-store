import * as actionTypes from './actionTypes';

export const addToCart = (plant) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: plant,
  };
};

export const increaseQuantity = (plantId) => {
  return {
    type: actionTypes.INCREASE_QUANTITY,
    payload: plantId,
  };
};

export const decreaseQuantity = (plantId) => {
  return {
    type: actionTypes.DECREASE_QUANTITY,
    payload: plantId,
  };
};

export const removeFromCart = (plantId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: plantId,
  };
};
