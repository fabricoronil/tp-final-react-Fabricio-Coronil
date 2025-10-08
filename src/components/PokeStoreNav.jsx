import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './PokeStoreNav.css';
import pokeStoreLogo from '../assets/pokestore.png';

export default function PokeStoreNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="screen">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo-container">
              <div className="logo logo-animation">
                <img src={pokeStoreLogo} alt="PokeStore Logo" className="logo-img" />
              </div>
            </div>

            <div className="desktop-nav-links">
              <NavLink 
                to="/" 
                className={({isActive}) => `nav-button ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
              </NavLink>
              <NavLink 
                to="/pokemones" 
                className={({isActive}) => `nav-button ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">⚡</span>
                <span className="nav-text">Pokémones</span>
              </NavLink>
              <NavLink 
                to="/favoritos" 
                className={({isActive}) => `nav-button ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">❤️</span>
                <span className="nav-text nav-text-full">Favoritos</span>
              </NavLink>
              <NavLink 
                to="/carrito" 
                className={({isActive}) => `nav-button ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">🛒</span>
                <span className="nav-text nav-text-full">Carrito</span>
              </NavLink>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-button"
              aria-label="Toggle menu"
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

          <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <NavLink 
              to="/" 
              className={({isActive}) => `mobile-nav-button ${isActive ? 'active' : ''}`} 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="mobile-nav-icon">🏠</span>
              <span>Home</span>
            </NavLink>
            <NavLink 
              to="/pokemones" 
              className={({isActive}) => `mobile-nav-button ${isActive ? 'active' : ''}`} 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="mobile-nav-icon">⚡</span>
              <span>Pokémones</span>
            </NavLink>
            <NavLink 
              to="/favoritos" 
              className={({isActive}) => `mobile-nav-button ${isActive ? 'active' : ''}`} 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="mobile-nav-icon">❤️</span>
              <span>Favoritos</span>
            </NavLink>
            <NavLink 
              to="/carrito" 
              className={({isActive}) => `mobile-nav-button ${isActive ? 'active' : ''}`} 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="mobile-nav-icon">🛒</span>
              <span>Carrito</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}