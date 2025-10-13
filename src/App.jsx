import { Routes, Route } from 'react-router-dom';
import PokeStoreNav from './components/PokeStoreNav';
import PokeList from './pages/PokeList';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Carrito from './pages/Carrito';
import PokeDetail from './pages/PokeDetail';
import Comprar from './pages/Comprar';
import { FavoritesProvider } from './pages/FavoritesProvider';
import { CartProvider } from './components/CartProvider';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <ScrollToTop />
        <PokeStoreNav />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<PokeList />} />
            <Route path="/pokemon/:id" element={<PokeDetail />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/comprar" element={<Comprar />} />
          </Routes>
        </div>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;