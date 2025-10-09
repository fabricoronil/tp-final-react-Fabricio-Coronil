import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './PokeList.css';
import { FavoritesContext } from '../context/FavoritesContext';
import { CartContext } from '../context/CartContext';
import PokeCard from './PokeCard';

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const { addToFavorites } = useContext(FavoritesContext);
  const { addToCart } = useContext(CartContext);

  const fetchPokemon = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="pokemon-container">
        {pokemon.map((p) => (
          <PokeCard key={p.id} pokemon={p}>
            <button className="add-to-cart-btn-new" onClick={() => addToCart(p)}>Añadir al carrito🛒</button>
            <button className="add-favorite-btn-new" onClick={() => addToFavorites(p)}>Favoritos ❤️</button>
            <Link to={`/pokemon/${p.id}`}><button className="view-more-btn-new">Información ℹ️</button></Link>
          </PokeCard>
        ))}
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
