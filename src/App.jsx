import { Routes, Route } from 'react-router-dom';
import PokeStoreNav from './components/PokeStoreNav';
import PokeList from './components/PokeList';
import Home from './components/Home';
import Favoritos from './components/Favoritos';
import Carrito from './components/Carrito';
import { FavoritesProvider } from './components/FavoritesContext';
import './App.css'

function App() {
  return (
    <>
      <FavoritesProvider>
        <PokeStoreNav />
        <div class="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<PokeList />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </>
  )
}

export default App