import { Routes, Route } from 'react-router-dom';
import PokeStoreNav from './components/PokeStoreNav';
import PokeList from './components/PokeList';
import Home from './components/Home';
import Favoritos from './components/Favoritos';
import Carrito from './components/Carrito';
import { FavoritesProvider } from './components/FavoritesContext';
import { CartProvider } from './components/CartProvider';
import './App.css'

function App() {
  return (
    <>
      <FavoritesProvider>
        <CartProvider>
          <PokeStoreNav />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemones" element={<PokeList />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </div>
        </CartProvider>
      </FavoritesProvider>
    </>
  )
}

export default App