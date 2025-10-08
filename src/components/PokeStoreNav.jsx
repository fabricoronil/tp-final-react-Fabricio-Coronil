import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './PokeStoreNav.css';

export default function PokeStoreNav() {
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
              <NavLink to="/" className={({isActive}) => `nav-button ${isActive ? 'active' : 'inactive'}`}>
                🏠 Home
              </NavLink>
              <NavLink to="/pokemones" className={({isActive}) => `nav-button ${isActive ? 'active' : 'inactive'}`}>
                Pokémones
              </NavLink>
              <NavLink to="/favoritos" className={({isActive}) => `nav-button ${isActive ? 'active' : 'inactive'}`}>
                <span className="fav-icon">❤️ Favoritos</span>
                <span className="fav-icon-mobile">❤️</span>
              </NavLink>
              <NavLink to="/carrito" className={({isActive}) => `nav-button ${isActive ? 'active' : 'inactive'}`}>
                <span className="cart-icon">🛒 Carrito</span>
                <span className="cart-icon-mobile">🛒</span>
              </NavLink>
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
              <NavLink to="/" className={({isActive}) => `mobile-nav-button ${isActive ? 'active' : 'inactive'}`} onClick={() => setMobileMenuOpen(false)}>
                🏠 Home
              </NavLink>
              <NavLink to="/pokemones" className={({isActive}) => `mobile-nav-button ${isActive ? 'active' : 'inactive'}`} onClick={() => setMobileMenuOpen(false)}>
                Pokémones
              </NavLink>
              <NavLink to="/favoritos" className={({isActive}) => `mobile-nav-button ${isActive ? 'active' : 'inactive'}`} onClick={() => setMobileMenuOpen(false)}>
                ❤️ Favoritos
              </NavLink>
              <NavLink to="/carrito" className={({isActive}) => `mobile-nav-button ${isActive ? 'active' : 'inactive'}`} onClick={() => setMobileMenuOpen(false)}>
                🛒 Carrito
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}