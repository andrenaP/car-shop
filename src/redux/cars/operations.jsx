import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://656b2dfedac3630cf727cdb0.mockapi.io';

export const getCarsBysearchParams = createAsyncThunk(
  'cars/getCarsBysearchParams',
  async ({ searchParams, priceStep, minMileage, maxMileage }, thunkAPI) => {
    try {
      const res = await axios.get(`/advert`, {
        params: searchParams,
      });
      let Output = res.data;
      if (Number(priceStep))
        Output = Output.filter(
          (car) => car.rentalPrice.substring(1) < priceStep
        );
      if (minMileage) {
        let min = Number(minMileage.replaceAll(',', ''));
        if (min) Output = Output.filter((car) => car.mileage > min);
      }
      if (maxMileage) {
        let max = Number(maxMileage.replaceAll(',', ''));
        if (max) Output = Output.filter((car) => car.mileage < max);
      }
      return Output;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
