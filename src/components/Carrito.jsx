import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './PokeList.css';

export default function Carrito() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleComprar = () => {
    const pokemonNames = cart.map(p => p.name).join(', ');
    alert(`¡Gracias por tu compra! Has comprado: ${pokemonNames}`);
    // Aquí podrías agregar la lógica para vaciar el carrito, por ejemplo.
  };

  const buttonStyle = {
    padding: '15px 40px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    backgroundColor: isHovered ? '#FB8C00' : '#FF9800', // Orange palette
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.2s',
    fontWeight: 'bold',
    width: '300px', // Ancho aumentado
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

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
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          onClick={handleComprar}
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Comprar
        </button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3 className="font-pixel">Resumen de tu compra:</h3>
        <ul style={{ listStyle: 'none', padding: 0, display: 'inline-block', textAlign: 'left' }}>
          {cart.map((p, index) => (
            <li key={index} style={{ fontSize: '1.1rem', margin: '5px 0' }}>
              - {p.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
