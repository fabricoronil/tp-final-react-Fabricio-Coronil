import React from 'react';

export default function Favoritos() {
  const favCount = 0;
  return (
    <div>
      <h2 className="section-title font-pixel">
        ❤️ Tus Favoritos ({favCount})
      </h2>
      <p className="section-text">
        Aquí encontrarás todos tus Pokémones favoritos guardados.
      </p>
    </div>
  );
}
