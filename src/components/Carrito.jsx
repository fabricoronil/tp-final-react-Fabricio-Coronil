import React from 'react';

export default function Carrito() {
  const cartCount = 0;
  return (
    <div>
      <h2 className="section-title font-pixel">
        🛒 Tu Carrito ({cartCount} items)
      </h2>
      <p className="section-text">
        Revisa tu carrito de compras antes de finalizar tu pedido.
      </p>
    </div>
  );
}
