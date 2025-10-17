import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './PokeList.css';
import './Carrito.css';
import PokeCard from '../components/PokeCard';
import { removeItem } from '../features/cart/cartSlice';

export default function Carrito() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleComprar = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }
    navigate('/comprar');
  };

  return (
    <div className="carrito-section">
      <h2 className="carrito-section__title font-pixel">
        🛒 Tu Carrito ({cart.length} items)
      </h2>
      <p className="carrito-section__text">
        Revisa tu carrito de compras antes de finalizar tu pedido.
      </p>
      

      <div className="pokemon-container">
        {cart.map((p, index) => (
          <PokeCard key={index} pokemon={p}>
            <Link to={`/pokemon/${p.id}`} className="carrito-card__info-link">
              <button className="view-more-btn-new">INFORMACION</button>
            </Link>
            <button className='carrito-card__remove-button' onClick={() => dispatch(removeItem(index))}>QUITAR DEL CARRITO</button>
          </PokeCard>
        ))}
        
        
        
           
      </div>
      <div className='carrito__buy-container'>
        <button
          onClick={handleComprar}
          className="carrito__buy-button">Comprar</button>
          </div>
      </div>

      
        
  
  );
}
