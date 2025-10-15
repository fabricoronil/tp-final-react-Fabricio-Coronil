
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const pokemon = action.payload;
      const index = state.items.findIndex(p => p.name === pokemon.name);
      if (index === -1) {
        state.items.push(pokemon);
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
