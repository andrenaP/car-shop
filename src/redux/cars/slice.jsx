import { createSlice } from '@reduxjs/toolkit';
import { getCarsBysearchParams } from './operations';

const initialState = {
  items: [],
  isRefreshing: false,
  error: null,
  favorites: [],
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.isRefreshing = true;
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      console.log(action.payload);
      const updatedFavorites = state.favorites.filter(
        (item) => item !== action.payload
      );
      state.favorites = updatedFavorites;
    },
  },
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: {
    [getCarsBysearchParams.fulfilled](state, action) {
      state.isRefreshing = false;
      state.items = action.payload;
      state.error = null;
    },
    [getCarsBysearchParams.rejected]: handleRejected,
    [getCarsBysearchParams.pending]: handlePending,
  },
});

export const carsReducer = carsSlice.reducer;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
