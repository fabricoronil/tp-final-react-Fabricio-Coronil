import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './PokeList.css';
import { FavoritesContext } from '../context/FavoritesContext';
import { CartContext } from '../context/CartContext';
import PokeCard from '../components/PokeCard';
import Loading from '../components/Loading';

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const { addToCart } = useContext(CartContext);

  const fetchPokemon = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la solicitud de la red');
      }
      const data = await response.json();
      setNextUrl(data.next);
      const pokemonDetails = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          const detailData = await res.json();
          return {
            id: detailData.id,
            name: detailData.name,
            image: detailData.sprites.front_default,
            price: Math.floor(Math.random() * 100) + 10,
          };
        })
      );
      setPokemon(prevPokemon => [...prevPokemon, ...pokemonDetails]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon(nextUrl);
  }, []);

  const handleLoadMore = () => {
    if (nextUrl) {
      fetchPokemon(nextUrl);
    }
  };

  if (loading && pokemon.length === 0) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="pokemon-container">
        {pokemon.map((p) => {
          const isFavorite = favorites.some(fav => fav.name === p.name);
          return (
            <PokeCard key={p.id} pokemon={p}>
              <div className="action-buttons">
                <button className="add-to-cart-btn-new" onClick={() => addToCart(p)}>Añadir al carrito🛒</button>
                <button
                  className={`heart-btn ${isFavorite ? 'favorited' : ''}`}
                  onClick={() => {
                    if (isFavorite) {
                      removeFromFavorites(p.name);
                    } else {
                      addToFavorites(p);
                    }
                  }}
                >
                  &#x2764;
                </button>
              </div>
              <Link to={`/pokemon/${p.id}`} state={{ price: p.price }}><button className="view-more-btn-new">Información ℹ️</button></Link>
            </PokeCard>
          )
        })}
      </div>
      <div className="load-more-container">
        {nextUrl && (
          <button onClick={handleLoadMore} disabled={loading} className="vermas">
            {loading ? 'Cargando...' : 'Ver más'}
          </button>
        )}
      </div>
    </div>
  );
};


export default PokeList;
