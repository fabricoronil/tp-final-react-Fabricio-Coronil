import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import './PokeList.css';
import PokeCard from './PokeCard';

export default function Favoritos() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

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
          <PokeCard key={index} pokemon={p}>
            <Link to={`/pokemon/${p.id}`}>
              <button className="view-more-btn">Informacion</button>
            </Link>
            <button
              className="remove-favorite-btn"
              onClick={() => removeFromFavorites(p.name)}
            >
              Quitar de favoritos
            </button>
          </PokeCard>
        ))}
      </div>
    </div>
  );
}
