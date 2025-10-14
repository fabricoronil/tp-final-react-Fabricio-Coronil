import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './PokeList.css';
import './Carrito.css';
import PokeCard from '../components/PokeCard';


export default function Carrito() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleComprar = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }
    navigate('/comprar');
  };

  return (
    <div className="section-carrito">
      <h2 className="section-title font-pixel">
        🛒 Tu Carrito ({cart.length} items)
      </h2>
      <p className="section-text">
        Revisa tu carrito de compras antes de finalizar tu pedido.
      </p>
      

      <div className="pokemon-container">
        {cart.map((p, index) => (
          <PokeCard key={index} pokemon={p}>
            <Link to={`/pokemon/${p.id}`} className="carrito-link">
              <button className="view-more-btn-new">INFORMACION</button>
            </Link>
            <button className='estilobotonquitar' onClick={() => removeFromCart(index)}>QUITAR DEL CARRITO</button>
          </PokeCard>
        ))}
        
        
        
           
      </div>
      <div className='container-comprar'>
        <button
          onClick={handleComprar}
          className="comprar-button">Comprar</button>
          </div>
      </div>

      
        
  
  );
}
