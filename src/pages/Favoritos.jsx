import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./PokeList.css";
import PokeCard from '../components/PokeCard';
import { toggleFavorite } from '../features/favorites/favoritesSlice';

export default function Favoritos() {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div className="section-favorito">
      <h2 className="section-title font-pixel">
        ❤️ Tus Favoritos ({favorites.length})
      </h2>
      <p className="section-text">
        Aquí encontrarás todos tus Pokémones favoritos guardados.
      </p>
      <div className="pokemon-container">
        {favorites.map((p, index) => (
          <PokeCard key={index} pokemon={p}>
            <div className="action-buttons">
              <Link to={`/pokemon/${p.id}`}>
                <button className="view-more-btn-new">Informacion</button>
              </Link>
              <button
                className="heart-btn favorited"
                onClick={() => dispatch(toggleFavorite(p))}
              >
                &#x2764;
              </button>
            </div>
          </PokeCard>
        ))}
      </div>
    </div>
  );
}
