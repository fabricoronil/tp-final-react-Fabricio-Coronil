import React, { useEffect, useState, useContext } from 'react';
import './PokeList.css';
import { FavoritesContext } from './FavoritesContext';
import { CartContext } from './CartContext';

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToFavorites } = useContext(FavoritesContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            const detailData = await res.json();
            return {
              name: detailData.name,
              image: detailData.sprites.front_default,
            };
          })
        );
        setPokemon(pokemonDetails);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="pokemon-container">
        {pokemon.map((p, index) => (
          <div key={index} className="pokemon-card">
            <img src={p.image} alt={p.name} />
            <p>{p.name}</p>
            <div className="pokemon-card-buttons">
              <button onClick={() => addToCart(p)}>Añadir al carrito</button>
              <button onClick={() => addToFavorites(p)}>Favoritos</button>
              <button>Información</button>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};


export default PokeList;
