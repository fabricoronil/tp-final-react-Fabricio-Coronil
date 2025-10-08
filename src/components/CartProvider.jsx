import React, { useState } from 'react';
import { CartContext } from '../context/CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pokemon) => {
    setCart((prevCart) => [...prevCart, pokemon]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};