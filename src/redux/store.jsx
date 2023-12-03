import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import favoritesReducer from './cars/slice';

import { carsReducer } from './cars/slice';

const reducers = combineReducers({
  cars: carsReducer,
  favorites: favoritesReducer,
});
const persistConfig = {
  key: 'favorites',
  version: 1,
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'developent',
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
