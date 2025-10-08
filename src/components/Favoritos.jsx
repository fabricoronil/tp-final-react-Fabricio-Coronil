import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';
import './PokeList.css';

export default function Favoritos() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2 className="section-title font-pixel">
        ❤️ Tus Favoritos ({favorites.length})
      </h2>
      <p className="section-text">
        Aquí encontrarás todos tus Pokémones favoritos guardados.
      </p>
      <div className="pokemon-container">
        {favorites.map((p, index) => (
          <div key={index} className="pokemon-card">
            <img src={p.image} alt={p.name} />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
