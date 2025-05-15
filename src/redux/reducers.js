import * as actionTypes from './actionTypes';

const initialState = {
  cart: [],
  totalItems: 0,
  totalCost: 0,
};

const calculateTotals = (cart) => {
  let totalItems = 0;
  let totalCost = 0;
  
  cart.forEach(item => {
    totalItems += item.quantity;
    totalCost += item.price * item.quantity;
  });
  
  return { totalItems, totalCost };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const newItem = { ...action.payload, quantity: 1 };
      const updatedCart = [...state.cart, newItem];
      const { totalItems, totalCost } = calculateTotals(updatedCart);
      
      return {
        ...state,
        cart: updatedCart,
        totalItems,
        totalCost
      };
      
    case actionTypes.INCREASE_QUANTITY:
      const increasedCart = state.cart.map(item => 
        item.id === action.payload 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
      
      return {
        ...state,
        cart: increasedCart,
        ...calculateTotals(increasedCart)
      };
      
    case actionTypes.DECREASE_QUANTITY:
      const decreasedCart = state.cart.map(item => 
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ).filter(item => item.quantity > 0);
      
      return {
        ...state,
        cart: decreasedCart,
        ...calculateTotals(decreasedCart)
      };
      
    case actionTypes.REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(item => item.id !== action.payload);
      
      return {
        ...state,
        cart: filteredCart,
        ...calculateTotals(filteredCart)
      };
      
    default:
      return state;
  }
};

export default cartReducer;