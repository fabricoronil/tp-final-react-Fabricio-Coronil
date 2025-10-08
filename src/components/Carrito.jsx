import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './PokeList.css';

export default function Carrito() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2 className="section-title font-pixel">
        🛒 Tu Carrito ({cart.length} items)
      </h2>
      <p className="section-text">
        Revisa tu carrito de compras antes de finalizar tu pedido.
      </p>
      <div className="pokemon-container">
        {cart.map((p, index) => (
          <div key={index} className="pokemon-card">
            <img src={p.image} alt={p.name} />
            <p>{p.name}</p>
            <button className='estilobotonquitar' onClick={() => removeFromCart(index)}>Quitar del Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}
