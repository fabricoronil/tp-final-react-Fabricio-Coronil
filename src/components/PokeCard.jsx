import React from 'react';
import './PokeCard.css';

const PokeCard = ({ pokemon, children }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      <div className="pokemon-card-buttons">
        {children}
      </div>
    </div>
  );
};

export default PokeCard;
