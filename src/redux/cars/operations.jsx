import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://656b2dfedac3630cf727cdb0.mockapi.io';

export const getAllCars = createAsyncThunk(
  'cars/GetAllCars',
  async (page = 1, thunkAPI) => {
    try {
      const res = await axios.get(`/advert?page=${page}&limit=12`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
