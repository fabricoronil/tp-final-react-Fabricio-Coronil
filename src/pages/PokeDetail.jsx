import { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './PokeDetail.css';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';

function PokeDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { price } = location.state || {};
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { addToFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data);
        fetch(data.species.url)
          .then(response => response.json())
          .then(speciesData => {
            setSpecies(speciesData);
          });
      });
  }, [id]);

  const handleAddToCart = () => {
    const pokemonToAdd = {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other['official-artwork'].front_default,
      price: price
    };
    addToCart(pokemonToAdd);
  };

  const handleAddToFavorites = () => {
    const pokemonToAdd = {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other['official-artwork'].front_default
    };
    addToFavorites(pokemonToAdd);
  };

  if (!pokemon || !species) {
    return <div class="loading">Cargando...</div>;
  }

  const description = species.flavor_text_entries.find(entry => entry.language.name === 'es');

  const statTranslations = {
    'hp': 'Vida',
    'attack': 'Ataque',
    'defense': 'Defensa',
    'special-attack': 'Ataque Especial',
    'special-defense': 'Defensa Especial',
    'speed': 'Velocidad'
  };

  return (
    <div class="poke-detail-container">
      <div class={`poke-detail-card type-${pokemon.types[0].type.name}`}>
        <div class="poke-detail-header">
          <h2 class="poke-name">{pokemon.name}</h2>
          <div class="poke-id">#{pokemon.id.toString().padStart(3, '0')}</div>
        </div>
        <div class="poke-detail-body">
          <div class="poke-image-section">
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} class="poke-detail-image" />
            <div class="poke-types">
              {pokemon.types.map(typeInfo => (
                <span key={typeInfo.type.name} class={`poke-type type-bg-${typeInfo.type.name}`}>
                  {typeInfo.type.name}
                </span>
              ))}
            </div>
          </div>
          <div class="poke-info-section">
            <p class="poke-description">{description ? description.flavor_text : 'No hay descripción disponible en español.'}</p>
            <div class="poke-measurements">
              <div>
                <h3>Altura</h3>
                <p>{pokemon.height / 10} m</p>
              </div>
              <div>
                <h3>Peso</h3>
                <p>{pokemon.weight / 10} kg</p>
              </div>
              <div>
                <h3>Precio</h3>
                <p>${price}</p>
              </div>
            </div>
            <div class="poke-abilities">
              <h3>Habilidades</h3>
              <ul>
                {pokemon.abilities.map(abilityInfo => (
                  <li key={abilityInfo.ability.name}>{abilityInfo.ability.name}</li>
                ))}
              </ul>
            </div>
            <div class="poke-actions">
              <button class="favorite-btn" onClick={handleAddToFavorites}>Añadir a Favoritos</button>
              <button class="cart-btn" onClick={handleAddToCart}>Añadir al Carrito</button>
            </div>
          </div>
        </div>
        <div class="poke-stats">
          <h3>Estadísticas Base</h3>
          {pokemon.stats.map(statInfo => (
            <div key={statInfo.stat.name} class="stat-item">
              <span class="stat-name">{statTranslations[statInfo.stat.name] || statInfo.stat.name}</span>
              <div class="stat-bar-container">
                <div class="stat-bar" style={{ width: `${(statInfo.base_stat / 255) * 100}%` }}></div>
              </div>
              <span class="stat-value">{statInfo.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokeDetail;