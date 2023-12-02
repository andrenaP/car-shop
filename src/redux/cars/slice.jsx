import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const initialState = {
  items: [],
  isRefreshing: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.isRefreshing = true;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: {
    [getAllCars.fulfilled](state, action) {
      state.isRefreshing = false;
      state.items = [state.items, ...action.payload];
      state.error = null;
    },
    [getAllCars.rejected]: handleRejected,
    [getAllCars.pending]: handlePending,
  },
});

export const carsReducer = carsSlice.reducer;
