import React, { useState } from 'react';
import './PokeStoreNav.css';

export default function PokeStoreNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [cartCount, _setCartCount] = useState(0);
  const [favCount, _setFavCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="screen">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo-container">
              <div className="logo logo-animation">
                <span className="logo-icon">⚡</span>
              </div>
              <h1 className="store-title font-pixel">PokeStore</h1>
            </div>

            <div className="desktop-nav-links">
              <button
                onClick={() => setActiveSection('home')}
                className={`nav-button ${
                  activeSection === 'home' ? 'active' : 'inactive'
                }`}
              >
                🏠 Home
              </button>
              <button
                onClick={() => setActiveSection('pokemones')}
                className={`nav-button ${
                  activeSection === 'pokemones' ? 'active' : 'inactive'
                }`}
              >
                Pokémones
              </button>

              <button
                onClick={() => setActiveSection('favoritos')}
                className={`nav-button ${
                  activeSection === 'favoritos' ? 'active' : 'inactive'
                }`}
              >
                <span className="fav-icon">❤️ Favoritos</span>
                <span className="fav-icon-mobile">❤️</span>
              </button>

              <button
                onClick={() => setActiveSection('carrito')}
                className={`nav-button ${
                  activeSection === 'carrito' ? 'active' : 'inactive'
                }`}
              >
                <span className="cart-icon">🛒 Carrito</span>
                <span className="cart-icon-mobile">🛒</span>
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-button"
            >
              <svg
                className="mobile-menu-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mobile-menu">
              <button
                onClick={() => {
                  setActiveSection('home');
                  setMobileMenuOpen(false);
                }}
                className={`mobile-nav-button ${
                  activeSection === 'home' ? 'active' : 'inactive'
                }`}
              >
                🏠 Home
              </button>
              <button
                onClick={() => {
                  setActiveSection('pokemones');
                  setMobileMenuOpen(false);
                }}
                className={`mobile-nav-button ${
                  activeSection === 'pokemones' ? 'active' : 'inactive'
                }`}
              >
                Pokémones
              </button>

              <button
                onClick={() => {
                  setActiveSection('favoritos');
                  setMobileMenuOpen(false);
                }}
                className={`mobile-nav-button ${
                  activeSection === 'favoritos' ? 'active' : 'inactive'
                }`}
              >
                ❤️ Favoritos
              </button>

              <button
                onClick={() => {
                  setActiveSection('carrito');
                  setMobileMenuOpen(false);
                }}
                className={`mobile-nav-button ${
                  activeSection === 'carrito' ? 'active' : 'inactive'
                }`}
              >
                🛒 Carrito
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="content-area">
        <div className={activeSection === 'pokemones' ? '' : 'content-box'}>
          {activeSection === 'home' && (
            <div>
              <h2 className="section-title font-pixel">
                Bienvenido a PokeStore
              </h2>
              <p className="section-text">
                Este es un proyecto en desarrollo con fines de aprendizaje, que combina la emoción de Pokémon con una experiencia de compra en línea. Nuestro objetivo es crear un espacio donde los fanáticos puedan explorar, seleccionar y guardar sus Pokémon favoritos, así como simular una compra en un entorno interactivo y divertido.
              </p>
            </div>
          )}
          {activeSection === 'pokemones' && (
            <div>
              <h2 className="section-title font-pixel">
                Explora Nuestros Pokémones
              </h2>
            </div>
          )}

          {activeSection === 'favoritos' && (
            <div>
              <h2 className="section-title font-pixel">
                ❤️ Tus Favoritos ({favCount})
              </h2>
              <p className="section-text">
                Aquí encontrarás todos tus Pokémones favoritos guardados.
              </p>
            </div>
          )}

          {activeSection === 'carrito' && (
            <div>
              <h2 className="section-title font-pixel">
                🛒 Tu Carrito ({cartCount} items)
              </h2>
              <p className="section-text">
                Revisa tu carrito de compras antes de finalizar tu pedido.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}