import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './PokeList.css';

export default function Carrito() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate();

  const handleComprar = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }
    navigate('/comprar');
  };

  const buttonStyle = {
    padding: '15px 40px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    backgroundColor: isHovered ? '#FB8C00' : '#FF9800',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.2s',
    fontWeight: 'bold',
    width: '300px',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const getVerDetallesButtonStyle = (index) => ({
    backgroundColor: hoveredButton === index ? '#d35400' : '#e67e22',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    fontWeight: 'bold',
    transform: hoveredButton === index ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.2s ease-in-out, background-color 0.3s ease',
  });

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
            <p>${p.price}</p>
            <Link to={`/pokemon/${p.id}`} style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <button
                style={getVerDetallesButtonStyle(index)}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                INFORMACION
              </button>
            </Link>
            <button className='estilobotonquitar' onClick={() => removeFromCart(index)}>QUITAR DEL CARRITO</button>
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
    </div>
  );
}
