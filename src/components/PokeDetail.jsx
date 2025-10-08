import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokeDetail.css';

function PokeDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);

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

  if (!pokemon || !species) {
    return <div className="loading">Cargando...</div>;
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
    <div className="poke-detail-container">
      <div className={`poke-detail-card type-${pokemon.types[0].type.name}`}>
        <div className="poke-detail-header">
          <h2 className="poke-name">{pokemon.name}</h2>
          <div className="poke-id">#{pokemon.id.toString().padStart(3, '0')}</div>
        </div>
        <div className="poke-detail-body">
          <div className="poke-image-section">
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="poke-detail-image" />
            <div className="poke-types">
              {pokemon.types.map(typeInfo => (
                <span key={typeInfo.type.name} className={`poke-type type-bg-${typeInfo.type.name}`}>
                  {typeInfo.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className="poke-info-section">
            <p className="poke-description">{description ? description.flavor_text : 'No hay descripción disponible en español.'}</p>
            <div className="poke-measurements">
              <div>
                <h3>Altura</h3>
                <p>{pokemon.height / 10} m</p>
              </div>
              <div>
                <h3>Peso</h3>
                <p>{pokemon.weight / 10} kg</p>
              </div>
            </div>
            <div className="poke-abilities">
              <h3>Habilidades</h3>
              <ul>
                {pokemon.abilities.map(abilityInfo => (
                  <li key={abilityInfo.ability.name}>{abilityInfo.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="poke-stats">
          <h3>Estadísticas Base</h3>
          {pokemon.stats.map(statInfo => (
            <div key={statInfo.stat.name} className="stat-item">
              <span className="stat-name">{statTranslations[statInfo.stat.name] || statInfo.stat.name}</span>
              <div className="stat-bar-container">
                <div className="stat-bar" style={{ width: `${(statInfo.base_stat / 255) * 100}%` }}></div>
              </div>
              <span className="stat-value">{statInfo.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokeDetail;