import React, { useState } from 'react';
import { CartContext } from '../context/CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pokemon) => {
    setCart((prevCart) => [...prevCart, pokemon]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};